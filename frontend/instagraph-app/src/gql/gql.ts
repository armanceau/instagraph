/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Query {\n    getArticles {\n      date\n      description\n      id\n      nombreDeLike\n      titre\n      auteur {\n        id\n        username\n        email\n        ntel\n      }\n    }\n  }\n": typeof types.QueryDocument,
    "\n  query QueryUser($getArticleByUserId: ID!) {\n    getArticleByUserId(id: $getArticleByUserId) {\n      id\n      titre\n      description\n      nombreDeLike\n      date\n    }\n  }\n": typeof types.QueryUserDocument,
    "\n  mutation Mutation($incrementNombreDeLikeId: ID!) {\n    incrementNombreDeLike(id: $incrementNombreDeLikeId) {\n      code\n      success\n      message\n      article {\n        nombreDeLike\n      }\n    }\n  }\n": typeof types.MutationDocument,
    "\n  mutation ajoutArticle($titre: String!, $description: String!, $userId: ID!) {\n    createArticle(titre: $titre, description: $description, userId: $userId) {\n      success\n      message\n    }\n  }\n": typeof types.AjoutArticleDocument,
    "\n  query QueryCommentaire($getCommentaireByArticleId: ID!) {\n    getCommentaireByArticleId(id: $getCommentaireByArticleId) {\n      auteur {\n        username\n      }\n      contenu\n      date\n      id\n    }\n  }\n": typeof types.QueryCommentaireDocument,
    "\n  mutation MutationCreateCommentaire(\n    $contenu: String!\n    $userId: ID!\n    $articleId: ID!\n  ) {\n    createCommentaire(\n      contenu: $contenu\n      userId: $userId\n      articleId: $articleId\n    ) {\n      success\n      message\n    }\n  }\n": typeof types.MutationCreateCommentaireDocument,
    "\n  mutation CreateUser($username: String!, $password: String!, $email: String!, $ntel: String!) {\n  createUser(username: $username, password: $password, email: $email, ntel: $ntel) {\n    code\n    success\n    message\n    user {\n      id\n      username\n      email\n      ntel\n    }\n  }\n}": typeof types.CreateUserDocument,
    "\n  mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}": typeof types.SignInDocument,
};
const documents: Documents = {
    "\n  query Query {\n    getArticles {\n      date\n      description\n      id\n      nombreDeLike\n      titre\n      auteur {\n        id\n        username\n        email\n        ntel\n      }\n    }\n  }\n": types.QueryDocument,
    "\n  query QueryUser($getArticleByUserId: ID!) {\n    getArticleByUserId(id: $getArticleByUserId) {\n      id\n      titre\n      description\n      nombreDeLike\n      date\n    }\n  }\n": types.QueryUserDocument,
    "\n  mutation Mutation($incrementNombreDeLikeId: ID!) {\n    incrementNombreDeLike(id: $incrementNombreDeLikeId) {\n      code\n      success\n      message\n      article {\n        nombreDeLike\n      }\n    }\n  }\n": types.MutationDocument,
    "\n  mutation ajoutArticle($titre: String!, $description: String!, $userId: ID!) {\n    createArticle(titre: $titre, description: $description, userId: $userId) {\n      success\n      message\n    }\n  }\n": types.AjoutArticleDocument,
    "\n  query QueryCommentaire($getCommentaireByArticleId: ID!) {\n    getCommentaireByArticleId(id: $getCommentaireByArticleId) {\n      auteur {\n        username\n      }\n      contenu\n      date\n      id\n    }\n  }\n": types.QueryCommentaireDocument,
    "\n  mutation MutationCreateCommentaire(\n    $contenu: String!\n    $userId: ID!\n    $articleId: ID!\n  ) {\n    createCommentaire(\n      contenu: $contenu\n      userId: $userId\n      articleId: $articleId\n    ) {\n      success\n      message\n    }\n  }\n": types.MutationCreateCommentaireDocument,
    "\n  mutation CreateUser($username: String!, $password: String!, $email: String!, $ntel: String!) {\n  createUser(username: $username, password: $password, email: $email, ntel: $ntel) {\n    code\n    success\n    message\n    user {\n      id\n      username\n      email\n      ntel\n    }\n  }\n}": types.CreateUserDocument,
    "\n  mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}": types.SignInDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Query {\n    getArticles {\n      date\n      description\n      id\n      nombreDeLike\n      titre\n      auteur {\n        id\n        username\n        email\n        ntel\n      }\n    }\n  }\n"): (typeof documents)["\n  query Query {\n    getArticles {\n      date\n      description\n      id\n      nombreDeLike\n      titre\n      auteur {\n        id\n        username\n        email\n        ntel\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QueryUser($getArticleByUserId: ID!) {\n    getArticleByUserId(id: $getArticleByUserId) {\n      id\n      titre\n      description\n      nombreDeLike\n      date\n    }\n  }\n"): (typeof documents)["\n  query QueryUser($getArticleByUserId: ID!) {\n    getArticleByUserId(id: $getArticleByUserId) {\n      id\n      titre\n      description\n      nombreDeLike\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Mutation($incrementNombreDeLikeId: ID!) {\n    incrementNombreDeLike(id: $incrementNombreDeLikeId) {\n      code\n      success\n      message\n      article {\n        nombreDeLike\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($incrementNombreDeLikeId: ID!) {\n    incrementNombreDeLike(id: $incrementNombreDeLikeId) {\n      code\n      success\n      message\n      article {\n        nombreDeLike\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ajoutArticle($titre: String!, $description: String!, $userId: ID!) {\n    createArticle(titre: $titre, description: $description, userId: $userId) {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation ajoutArticle($titre: String!, $description: String!, $userId: ID!) {\n    createArticle(titre: $titre, description: $description, userId: $userId) {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QueryCommentaire($getCommentaireByArticleId: ID!) {\n    getCommentaireByArticleId(id: $getCommentaireByArticleId) {\n      auteur {\n        username\n      }\n      contenu\n      date\n      id\n    }\n  }\n"): (typeof documents)["\n  query QueryCommentaire($getCommentaireByArticleId: ID!) {\n    getCommentaireByArticleId(id: $getCommentaireByArticleId) {\n      auteur {\n        username\n      }\n      contenu\n      date\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MutationCreateCommentaire(\n    $contenu: String!\n    $userId: ID!\n    $articleId: ID!\n  ) {\n    createCommentaire(\n      contenu: $contenu\n      userId: $userId\n      articleId: $articleId\n    ) {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation MutationCreateCommentaire(\n    $contenu: String!\n    $userId: ID!\n    $articleId: ID!\n  ) {\n    createCommentaire(\n      contenu: $contenu\n      userId: $userId\n      articleId: $articleId\n    ) {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($username: String!, $password: String!, $email: String!, $ntel: String!) {\n  createUser(username: $username, password: $password, email: $email, ntel: $ntel) {\n    code\n    success\n    message\n    user {\n      id\n      username\n      email\n      ntel\n    }\n  }\n}"): (typeof documents)["\n  mutation CreateUser($username: String!, $password: String!, $email: String!, $ntel: String!) {\n  createUser(username: $username, password: $password, email: $email, ntel: $ntel) {\n    code\n    success\n    message\n    user {\n      id\n      username\n      email\n      ntel\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}"): (typeof documents)["\n  mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;