import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $lastName: String!
    $firstName: String!
    $lastNameKana: String!
    $firstNameKana: String!
    $email: String!
  ) {
    register(
      registerInput: {
        lastName: $lastName
        firstName: $firstName
        lastNameKana: $lastNameKana
        firstNameKana: $firstNameKana
        email: $email
      }
    ) {
      id
      lastName
      email
    }
  }
`
