import { gql } from '@apollo/client'

export const UPDATE_TOKEN = gql`
  query {
    updateToken {
      user {
        id
        lastName
        firstName
        lastNameKana
        firstNameKana
        email
      }
    }
  }
`
