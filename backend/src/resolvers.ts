import { PrismaClient } from "@prisma/client";
import { userMutations } from "./domain/user/mutations.js";
import { articleMutations } from "./domain/articles/mutations.js";
import { ArticleResolver } from "./domain/articles/models.js";
import { commentaireMutations } from "./domain/commentaire/mutation.js";
import { CommentaireResolver } from "./domain/commentaire/models.js";
import { get } from "http";


const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    getArticles: () => {
      return prisma.article.findMany()
  }, 

  getArticleById: (_, args) => {
      const id = args.id
      return prisma.article.findUnique({
          where: {id}
      })
  },
  getCommentaires: () => {
    return prisma.commentaire.findMany()
  }
  ,

  getCommentaireByID: (_, args) => {
    const id = args.id
    return prisma.commentaire.findUnique({
        where: {id}
    })
  }

  },
  Mutation: {
    ...userMutations,
    ...articleMutations,
    ...commentaireMutations,
  },

  Article: ArticleResolver,
  Commentaire: CommentaireResolver
};
