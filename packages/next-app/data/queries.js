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

export const PROJECT = gql`
  query project($slug: String) {
    project(slug: $slug) {
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
