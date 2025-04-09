import db from "../../datasources/db.js";
import { ModelMutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type CommentaireMutations = WithRequired<ModelMutationResolvers, 'createCommentaire'>

  const createCommentaire: NonNullable<ModelMutationResolvers['createCommentaire']> = async (_, {contenu, userId, articleId}, {dataSources: {db}}) => {
    try {
      const createdCommentaire = await db.commentaire.create({
        data: {
            contenu,
            date: Math.floor(Date.now() / 1000 / 60),
            userId,
            articleId,
        }
      });
  
      return {
        code: 201,
        message: 'commentaire has been created',
        success: true,
        commentaire: createdCommentaire
      }
    } catch (error: any) {
        return {
          code: 400,
          message: `Commentaire has not been created: ${error.message ?? 'Unknown error'}`,
          success: false,
          commentaire: null,
        }
    }
  }

  export const commentaireMutations: CommentaireMutations = {createCommentaire}
