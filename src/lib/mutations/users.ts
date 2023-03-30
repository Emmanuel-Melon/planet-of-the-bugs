import {
  gql,
  // @ts-ignore
} from '@apollo/client/core/core.cjs';

export const ADD_NEW_USER = gql`
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
