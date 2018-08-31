import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { zNodeFragment } from '../../queries'

export const submitQuestionMutation = gql`
  mutation($title: String!, $tags: [String!]!) {
    createQuestionAndTags(title: $title, tags: $tags) {
      id
      title
      slug
      user {
        id
      }
      node {
        ${zNodeFragment}
      }
      createdAt
    }
  }
`

export const editQuestionMutation = gql`
  mutation($questionId: ID!, $title: String!, $tags: [String!]!) {
    updateQuestionAndTags(id: $questionId, title: $title, tags: $tags) {
      id
      title
      slug
      user {
        id
      }
      node {
        id
        tags {
          id
          label
        }
      }
    }
  }
`

export const submitQuestion = graphql(submitQuestionMutation, {
  name: 'submitQuestion',
  props: ({ submitQuestion }) => ({
    submitQuestion: (title, tags) => {
      return submitQuestion({
        variables: {
          title,
          tags
        }
      })
    }
  })
})

export const editQuestion = graphql(editQuestionMutation, {
  name: 'editQuestion',
  props: ({ editQuestion }) => ({
    editQuestion: (questionId, title, tags) => {
      return editQuestion({
        variables: {
          questionId,
          title,
          tags
        }
      })
    }
  })
})
