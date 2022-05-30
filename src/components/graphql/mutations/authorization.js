import { gql } from "@apollo/client";

export const AUTHORIZATION = gql`
  mutation {
    login(username: "UserOne", password: "pass") {
      token
      username
    }
  }
`;
