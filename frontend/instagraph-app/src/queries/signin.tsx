import { graphql } from "../gql";

export const signinDocument = graphql(`
  mutation SignIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password) {
    code
    success
    message
    token
  }
}`
);
