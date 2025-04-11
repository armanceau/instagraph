import { graphql } from "../gql";

export const createuserDocument = graphql(`
  mutation CreateUser($username: String!, $password: String!, $email: String!, $ntel: String!) {
  createUser(username: $username, password: $password, email: $email, ntel: $ntel) {
    code
    success
    message
    user {
      id
      username
      email
      ntel
    }
  }
}`
);
