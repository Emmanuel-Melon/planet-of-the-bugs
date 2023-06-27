import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const INSERT_NEW_USER = gql`
  mutation addNewUser($username: String, $name: String, $email: String) {
    insert_user_one(
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
  mutation insertVerificationToken(
    $verificationTokenInput: verification_token_input!
  ) {
    insert_verification_token_one(object: $verificationTokenInput) {
      expires
      identifier
      token
    }
  }
`;

export const INSERT_NEW_ACCOUNT = gql`
  mutation insertNewAccount($newAccountInput: account_input!) {
    insert_account_one(object: $newAccountInput) {
      expires
      identifier
      token
    }
  }
`;

export const DELETE_SESSION = gql`
  mutation deleteSession($sessionToken: String) {
    delete_session(where: { sessionToken: { _eq: $sessionToken } }) {
      affected_rows
    }
  }
`;

export const UPDATE_SESSION = gql`
  mutation updateSession($sessionToken: String) {
    update_session(where: { sessionToken: { _eq: $sessionToken } }) {
      affected_rows
      returning
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: uuid) {
    update_users(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const UPDATE_USER_TOPICS = gql`
  mutation updateUserTopics($userTopics: json = "", $uid: uuid = "uid") {
    update_user(
      _set: { userTopics: $userTopics }
      where: { id: { _eq: $uid } }
    ) {
      affected_rows
    }
  }
`;

export const INSERT_NEW_SESSION = gql`
  mutation insertNewSession($newSessionInput: session_input!) {
    insert_session_one(object: $newSessionInput) {
      expires
      id
      sessionToken
      userId
    }
  }
`;
