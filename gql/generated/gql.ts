/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        lastName\n        firstName\n        lastNameKana\n        firstNameKana\n        email\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  mutation Signin(\n    $lastName: String!\n    $firstName: String!\n    $lastNameKana: String!\n    $firstNameKana: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    signin(\n      signinInput: {\n        lastName: $lastName\n        firstName: $firstName\n        lastNameKana: $lastNameKana\n        firstNameKana: $firstNameKana\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      user {\n        id\n        lastName\n        firstName\n        lastNameKana\n        firstNameKana\n        email\n      }\n    }\n  }\n": types.SigninDocument,
    "\n  query SearchUsers($lastName: String!) {\n    searchUsers(lastName: $lastName) {\n      id\n      lastName\n    }\n  }\n": types.SearchUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        lastName\n        firstName\n        lastNameKana\n        firstNameKana\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        lastName\n        firstName\n        lastNameKana\n        firstNameKana\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Signin(\n    $lastName: String!\n    $firstName: String!\n    $lastNameKana: String!\n    $firstNameKana: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    signin(\n      signinInput: {\n        lastName: $lastName\n        firstName: $firstName\n        lastNameKana: $lastNameKana\n        firstNameKana: $firstNameKana\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      user {\n        id\n        lastName\n        firstName\n        lastNameKana\n        firstNameKana\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Signin(\n    $lastName: String!\n    $firstName: String!\n    $lastNameKana: String!\n    $firstNameKana: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    signin(\n      signinInput: {\n        lastName: $lastName\n        firstName: $firstName\n        lastNameKana: $lastNameKana\n        firstNameKana: $firstNameKana\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      user {\n        id\n        lastName\n        firstName\n        lastNameKana\n        firstNameKana\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchUsers($lastName: String!) {\n    searchUsers(lastName: $lastName) {\n      id\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query SearchUsers($lastName: String!) {\n    searchUsers(lastName: $lastName) {\n      id\n      lastName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;