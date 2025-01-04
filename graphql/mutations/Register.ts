import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation RegisterUser($fullname: String!) {
    register(registerInput: { fullname: $fullname }) {
      id
      fullname
    }
  }
`
