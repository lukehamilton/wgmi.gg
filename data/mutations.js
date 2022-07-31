import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject(
    $message: String
    $signature: String
    $account: String
  ) {
    createProject(message: $message, signature: $signature, account: $account) {
      id
    }
  }
`;
