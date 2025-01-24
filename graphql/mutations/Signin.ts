import { gql } from '@apollo/client'

export const SIGNIN = gql`
  mutation Signin(
    $lastName: String!
    $firstName: String!
    $lastNameKana: String!
    $firstNameKana: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signin(
      signinInput: {
        lastName: $lastName
        firstName: $firstName
        lastNameKana: $lastNameKana
        firstNameKana: $firstNameKana
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
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
