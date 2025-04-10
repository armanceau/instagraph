/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  auteur: User;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nombreDeLike: Scalars['Int']['output'];
  titre: Scalars['String']['output'];
};

export type Commentaire = {
  __typename?: 'Commentaire';
  article: Article;
  auteur: User;
  contenu: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CreateArticleResponse = {
  __typename?: 'CreateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateCommentaireResponse = {
  __typename?: 'CreateCommentaireResponse';
  code: Scalars['Int']['output'];
  commentaire?: Maybe<Commentaire>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type DeleteArticleResponse = {
  __typename?: 'DeleteArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteCommentaireResponse = {
  __typename?: 'DeleteCommentaireResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IncrementNombreDeLikeReponse = {
  __typename?: 'IncrementNombreDeLikeReponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IncrementNombreDeLikeResponse = {
  __typename?: 'IncrementNombreDeLikeResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: CreateArticleResponse;
  createCommentaire: CreateCommentaireResponse;
  createUser: CreateUserResponse;
  deleteArticle: DeleteArticleResponse;
  deleteCommentaire: DeleteCommentaireResponse;
  incrementNombreDeLike: IncrementNombreDeLikeResponse;
  signIn: SignInResponse;
  updateArticle: UpdateArticleResponse;
  updateCommentaire: UpdateCommentaireResponse;
  updatePartielleArticle: UpdatePartielleArticleResponse;
};


export type MutationCreateArticleArgs = {
  description: Scalars['String']['input'];
  titre: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateCommentaireArgs = {
  articleId: Scalars['ID']['input'];
  contenu: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  ntel: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentaireArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementNombreDeLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  titre: Scalars['String']['input'];
};


export type MutationUpdateCommentaireArgs = {
  contenu: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdatePartielleArticleArgs = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  titre: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getArticleById?: Maybe<Article>;
  getArticleByUserId?: Maybe<Array<Maybe<Article>>>;
  getArticles?: Maybe<Array<Maybe<Article>>>;
  getCommentaireByID?: Maybe<Commentaire>;
  getCommentaires?: Maybe<Array<Maybe<Commentaire>>>;
};


export type QueryGetArticleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetArticleByUserIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCommentaireByIdArgs = {
  id: Scalars['ID']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UpdateArticleResponse = {
  __typename?: 'UpdateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdateCommentaireResponse = {
  __typename?: 'UpdateCommentaireResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdatePartielleArticleResponse = {
  __typename?: 'UpdatePartielleArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ntel: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', getArticles?: Array<{ __typename?: 'Article', date: string, description: string, id: string, nombreDeLike: number, titre: string, auteur: { __typename?: 'User', id: string, username: string, email: string, ntel: string } } | null> | null };

export type QueryUserQueryVariables = Exact<{
  getArticleByUserIdId: Scalars['ID']['input'];
}>;


export type QueryUserQuery = { __typename?: 'Query', getArticleByUserId?: Array<{ __typename?: 'Article', id: string, titre: string, description: string, nombreDeLike: number, date: string } | null> | null };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nombreDeLike"}},{"kind":"Field","name":{"kind":"Name","value":"titre"}},{"kind":"Field","name":{"kind":"Name","value":"auteur"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"ntel"}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const QueryUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getArticleByUserIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticleByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getArticleByUserIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"titre"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nombreDeLike"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<QueryUserQuery, QueryUserQueryVariables>;