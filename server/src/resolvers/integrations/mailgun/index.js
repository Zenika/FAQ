const fetch = require('isomorphic-fetch')
const FormData = require('form-data')

const answer = require('./answer')

class Mailgun {
  async sendNewAnswer(ctx, nodeId) {
    const {
      service: { name, stage },
      configuration: conf
    } = ctx.prisma._meta

    if (!conf.mailgunDomain || !conf.mailgunApiKey) {
      // eslint-disable-next-line no-console
      console.warn(
        `Please provide a mailgun domain and api key for service ${name}/${stage}`
      )
      return null
    }

    const node = await this.getNode(ctx, nodeId)

    const mail = answer.generateMail(node, conf, ctx)

    return this.sendMail(mail, conf)
  }

  async sendMail({ from, to, subject, text, html }, conf) {
    const token = Buffer.from(`api:${conf.mailgunApiKey}`).toString('base64')
    const endpoint = `https://api.mailgun.net/v3/${conf.mailgunDomain}/messages`

    const form = new FormData()
    form.append('from', from)
    form.append('to', to)
    form.append('subject', subject)
    form.append('text', text)
    form.append('html', html)

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${token}`
      },
      method: 'POST',
      body: form
    }).then(response => response.json())

    return response
  }

  getNode(ctx, nodeId) {
    return ctx.prisma.query.zNode(
      { where: { id: nodeId } },
      `
      {
        id
        question {
          title
          slug
          user {
            name
            email
          }
        }
        answer {
          content
          user {
            name
          }
        }
      }
      `
    )
  }
}

const mailgun = new Mailgun()

module.exports = mailgun
