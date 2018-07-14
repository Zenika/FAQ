const { history, ctxUser, slugify } = require('./helpers')

module.exports = {
  Mutation: {
    createQuestionAndTags: async (_, { title, tags }, ctx, info) => {
      const node = await ctx.prisma.mutation.createZNode(
        {
          data: {
            question: {
              create: {
                title,
                slug: slugify(title),
                user: { connect: { id: ctxUser(ctx).id } }
              }
            },
            tags: {
              create: tags.map(label => ({
                label,
                user: { connect: { id: ctxUser(ctx).id } }
              }))
            }
          }
        },
        `
        {
          id
          question {
            id
          }
        }
        `
      )

      await history.push(ctx, {
        action: 'CREATED',
        model: 'Question',
        meta: { title, tags },
        nodeId: node.id
      })

      return ctx.prisma.query.question(
        { where: { id: node.question.id } },
        info
      )
    },
    updateQuestionAndTags: async (_, { id, title, tags }, ctx, info) => {
      const node = (await ctx.prisma.query.question(
        { where: { id } },
        `
        {
          node {
            id
            question {
              title
            }
            tags {
              id
              label
            }
          }
        }
        `
      )).node

      const oldTags = node.tags
      const newTags = tags

      const tagsToAdd = newTags.filter(
        newTag => !oldTags.map(t => t.label).includes(newTag)
      )
      const tagsToRemove = oldTags.filter(
        oldTag => !newTags.includes(oldTag.label)
      )

      const mutationsToAdd = tagsToAdd.map(label =>
        ctx.prisma.mutation.createTag({
          data: {
            label,
            node: { connect: { id: node.id } },
            user: { connect: { id: ctxUser(ctx).id } }
          }
        })
      )

      const mutationsToRemove = tagsToRemove.map(tag =>
        ctx.prisma.mutation.deleteTag({ where: { id: tag.id } })
      )

      await Promise.all([...mutationsToAdd, ...mutationsToRemove])

      const meta = {
        tagsChanges: {
          added: tagsToAdd,
          removed: tagsToRemove.map(t => t.label)
        }
      }

      if (title != node.question.title) {
        meta.title = title
      }

      await history.push(ctx, {
        action: 'UPDATED',
        model: 'Question',
        meta,
        nodeId: node.id
      })

      return ctx.prisma.mutation.updateQuestion(
        {
          where: { id },
          data: {
            title,
            slug: slugify(title)
          }
        },
        info
      )
    }
  }
}
