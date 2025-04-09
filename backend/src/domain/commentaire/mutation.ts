import db from "../../datasources/db.js";
import { ModelMutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type CommentaireMutations = WithRequired<
  ModelMutationResolvers,
  | "createCommentaire"
  | "updateCommentaire"
  | "deleteCommentaire"
>;

const createCommentaire: NonNullable<ModelMutationResolvers["createCommentaire"]> = async (
  _,
  { contenu, userId, articleId },
  { dataSources: { db } }
) => {
  try {
    const createdCommentaire = await db.commentaire.create({
      data: {
        contenu,
        date: Math.floor(Date.now() / 1000 / 60),
        userId,
        articleId,
      },
    });

    return {
      code: 201,
      message: "Commentaire has been created",
      success: true,
      commentaire: createdCommentaire,
    };
  } catch (error: any) {
    return {
      code: 400,
      message: `Commentaire has not been created: ${error.message ?? "Unknown error"}`,
      success: false,
      commentaire: null,
    };
  }
};

const updateCommentaire: NonNullable<ModelMutationResolvers["updateCommentaire"]> = async (
  _,
  { id, contenu },
  { dataSources: { db } }
) => {
  try {
    const updatedCommentaire = await db.commentaire.update({
      where: { id },
      data: {
        contenu,
        date: Math.floor(Date.now() / 1000 / 60),
      },
    });

    return {
      code: 201,
      message: "Commentaire has been updated",
      success: true,
      commentaire: updatedCommentaire,
    };
  } catch (error: any) {
    return {
      code: 400,
      message: `Commentaire has not been updated: ${error.message ?? "Unknown error"}`,
      success: false,
      commentaire: null,
    };
  }
};

const deleteCommentaire: NonNullable<ModelMutationResolvers["deleteCommentaire"]> = async (
  _,
  { id },
  { dataSources: { db } }
) => {
  try {
    const deletedCommentaire = await db.commentaire.delete({
      where: { id },
    });

    return {
      code: 200,
      message: "Commentaire has been deleted",
      success: true,
      commentaire: deletedCommentaire,
    };
  } catch (error: any) {
    return {
      code: 400,
      message: `Commentaire has not been deleted: ${error.message ?? "Unknown error"}`,
      success: false,
      commentaire: null,
    };
  }
};

export const commentaireMutations: CommentaireMutations = {
  createCommentaire,
  updateCommentaire,
  deleteCommentaire,
};
