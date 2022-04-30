import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject($name: String) {
    createProject(name: $name) {
      id
    }
  }
`;
