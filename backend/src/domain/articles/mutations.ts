import db from "../../datasources/db.js";
import { ModelMutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type ArticleMutations = WithRequired<
  ModelMutationResolvers,
  | "createArticle"
  | "deleteArticle"
  | "updateArticle"
  | "updatePartielleArticle"
  | "incrementNombreDeLike"
>;

const createArticle: NonNullable<
  ModelMutationResolvers["createArticle"]
> = async (_, { titre, description, userId }, { dataSources: { db } }) => {
  try {
    const createdArticle = await db.article.create({
      data: {
        titre,
        description,
        userId,
        nombreDeLike: 0,
        date: Math.floor(Date.now() / 1000 / 60),
      },
    });

    return {
      code: 201,
      message: "article has been created",
      success: true,
      article: createdArticle,
    };
  } catch (error: any) {
    return {
      code: 400,
      message: `Article has not been created: ${
        error.message ?? "Unknown error"
      }`,
      success: false,
      article: null,
    };
  }
};

const deleteArticle: NonNullable<
  ModelMutationResolvers["deleteArticle"]
> = async (_, { id }, { dataSources: { db } }) => {
  try {
    const deletedArticle = await db.article.delete({
      where: { id },
    });

    return {
      code: 200,
      message: "article has been deleted",
      success: true,
      article: deletedArticle,
    };
  } catch (error: any) {
    return {
      code: 400,
      message: `Article has not been deleted: ${
        error.message ?? "Unknown error"
      }`,
      success: false,
      article: null,
    };
  }
};

const updateArticle: NonNullable<
  ModelMutationResolvers["updateArticle"]
> = async (_, { id, titre, description }, { dataSources: { db } }) => {
  try {
    const updatedArticle = await db.article.update({
      where: { id },
      data: {
        titre,
        description,
        date: Math.floor(Date.now() / 1000 / 60),
      },
    });

    return {
      code: 201,
      message: "article has been updated",
      success: true,
      article: updatedArticle,
    };
  } catch (error: any) {
    return {
      code: 400,
      message:
        "Article has not been updated: ${error.message ?? 'Unknown error'}",
      success: false,
      article: null,
    };
  }
};

const updatePartielleArticle: NonNullable<
  ModelMutationResolvers["updatePartielleArticle"]
> = async (_, { id, titre, description }, { dataSources: { db } }) => {
  try {
    const dataToUpdate: any = {
      date: Math.floor(Date.now() / 1000 / 60),
    };

    if (typeof titre !== "undefined") dataToUpdate.titre = titre;
    if (typeof description !== "undefined")
      dataToUpdate.description = description;

    const updatedArticle = await db.article.update({
      where: { id },
      data: dataToUpdate,
    });

    return {
      code: 201,
      message: "Article has been updated",
      success: true,
      article: updatedArticle,
    };
  } catch (error: any) {
    return {
      code: 400,
      message: `Article has not been updated: ${
        error.message ?? "Unknown error"
      }`,
      success: false,
      article: null,
    };
  }
};

const incrementNombreDeLike: NonNullable<
  ModelMutationResolvers["incrementNombreDeLike"]
> = async (_, { id }, { dataSources: { db } }) => {
  try {
    const nombreDeLikeIncremente = await db.article.update({
      where: { id },
      data: {
        nombreDeLike: {
          increment: 1,
        },
      },
    });

    return {
      code: 201,
      message: "article has been updated",
      success: true,
      article: nombreDeLikeIncremente,
    };
  } catch (error: any) {
    return {
      code: 400,
      message:
        "Increment has not been updated: ${error.message ?? 'Unknown error'}",
      success: false,
      article: null,
    };
  }
};

export const articleMutations: ArticleMutations = {
  createArticle,
  deleteArticle,
  updateArticle,
  updatePartielleArticle,
  incrementNombreDeLike,
};
