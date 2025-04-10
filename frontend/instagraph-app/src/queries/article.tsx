import { graphql } from "../gql";

export const getArticles = graphql(`
  query Query {
    getArticles {
      date
      description
      id
      nombreDeLike
      titre
      auteur {
        id
        username
        email
        ntel
      }
    }
  }
`);

export const getArticlesByUser = graphql(`
  query Query {
    getArticles {
      date
      description
      id
      nombreDeLike
      titre
      auteur {
        id
        username
        email
        ntel
      }
    }
  }
`);
