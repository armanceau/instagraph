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
  query QueryUser($getArticleByUserIdId: ID!) {
    getArticleByUserId(id: $getArticleByUserIdId) {
      id
      titre
      description
      nombreDeLike
      date
    }
  }
`);

export const incrementLike = graphql(`
  mutation Mutation($incrementNombreDeLikeId: ID!) {
    incrementNombreDeLike(id: $incrementNombreDeLikeId) {
      code
      success
      message
      article {
        nombreDeLike
      }
    }
  }
`);
