import { PrismaClient } from "@prisma/client";
import { userMutations } from "./domain/user/mutations.js";
import { articleMutations } from "./domain/articles/mutations.js";
import { ArticleResolver } from "./domain/articles/models.js";


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
  }
  },
  Mutation: {
    ...userMutations,
    ...articleMutations
  },
  Article: ArticleResolver
};
