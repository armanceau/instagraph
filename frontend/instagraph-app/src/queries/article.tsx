import { graphql } from "../gql";

export const allFilmsWithVariablesQueryDocument = graphql(`
  query Query {
    getArticles {
      date
      description
      id
      nombreDeLike
      titre
    }
  }
`);
