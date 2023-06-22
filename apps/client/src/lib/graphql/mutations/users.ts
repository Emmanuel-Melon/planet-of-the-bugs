import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const INSERT_NEW_USER = gql`
  mutation addNewUser($username: String, $name: String, $email: String) {
    insert_users_one(
      object: { email: $email, name: $name, username: $username }
    ) {
      id
      username
      name
      email
      role
    }
  }
`;

export const INSERT_NEW_VERIFICATION_TOKEN = gql`

`;

export const INSERT_NEW_ACCOUNT = gql`

`;

export const DELETE_SESSION = gql`

`;

export const UPADTE_SESSION = gql`

`;

export const UPADTE_USER = gql`

`;

export const INSERT_NEW_SESSION = gql`

`;