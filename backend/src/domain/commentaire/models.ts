import { ModelCommentaireResolvers } from "../../types";

export const CommentaireResolver: ModelCommentaireResolvers = {
    auteur: (parent, _, {dataSources: {db}}) => db.user.findFirstOrThrow({where: {id: parent.userId}}),
    article: (parent, _, {dataSources: {db}}) => db.article.findFirstOrThrow({where: {id: parent.articleId}}),
    date: (parent) => parent.date.toString(),

}