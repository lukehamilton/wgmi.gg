import { gql } from "@apollo/client";

export const PROJECTS = gql`
  query projects {
    projects {
      id
      name
      slug
      website
      twitter
      discord
      opensea
      metadata
    }
  }
`;
