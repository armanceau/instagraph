import { ModelArticleResolvers } from "../../types";

export const ArticleResolver: ModelArticleResolvers = {
    auteur: (parent, _, {dataSources: {db}}) => db.user.findFirstOrThrow({where: {id: parent.userId}}),

    date: (parent) => parent.date.toString(),

}