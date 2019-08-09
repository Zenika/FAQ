import gql from 'graphql-tag'

export const SEARCH_NODES = gql`
  query($text: String, $tags: [String!], $flags: [String!], $first: Int!, $skip: Int!) {
    search(
      text: $text
      tags: $tags
      flags: $flags
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
    ) {
      nodes {
        id
        question {
          id
          title
          slug
          createdAt
        }
        answer {
          id
          content
        }
        flags {
          id
          type
        }
        tags {
          id
          label
        }
        highlights
      }
      meta {
        entriesCount
        pagesCount
        pageCurrent
      }
    }
  }
`
