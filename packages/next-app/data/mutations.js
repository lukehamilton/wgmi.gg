import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject($name: String, $links: [String]) {
    createProject(name: $name, links: $links) {
      id
    }
  }
`;
