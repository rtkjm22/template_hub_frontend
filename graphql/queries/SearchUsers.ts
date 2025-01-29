import { gql } from "@apollo/client"

export const SEARCH_USERS = gql`
  query SearchUsers($lastName: String!) {
    searchUsers(lastName: $lastName) {
      id
      lastName
    }
  }
`
