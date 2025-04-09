import { GraphQLResolveInfo } from 'graphql';
import { Article, Commentaire } from '@prisma/client';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ModelArticle = {
  __typename?: 'Article';
  auteur: ModelUser;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nombreDeLike: Scalars['Int']['output'];
  titre: Scalars['String']['output'];
};

export type ModelCommentaire = {
  __typename?: 'Commentaire';
  article: ModelArticle;
  auteur: ModelUser;
  contenu: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ModelCreateArticleResponse = {
  __typename?: 'CreateArticleResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelCreateCommentaireResponse = {
  __typename?: 'CreateCommentaireResponse';
  code: Scalars['Int']['output'];
  commentaire?: Maybe<ModelCommentaire>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelCreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<ModelUser>;
};

export type ModelDeleteArticleResponse = {
  __typename?: 'DeleteArticleResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelDeleteCommentaireResponse = {
  __typename?: 'DeleteCommentaireResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelDoctor = {
  __typename?: 'Doctor';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type ModelIncrementNombreDeLikeReponse = {
  __typename?: 'IncrementNombreDeLikeReponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelIncrementNombreDeLikeResponse = {
  __typename?: 'IncrementNombreDeLikeResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelMutation = {
  __typename?: 'Mutation';
  createArticle: ModelCreateArticleResponse;
  createCommentaire: ModelCreateCommentaireResponse;
  createUser: ModelCreateUserResponse;
  deleteArticle: ModelDeleteArticleResponse;
  deleteCommentaire: ModelDeleteCommentaireResponse;
  incrementNombreDeLike: ModelIncrementNombreDeLikeResponse;
  signIn: ModelSignInResponse;
  updateArticle: ModelUpdateArticleResponse;
  updateCommentaire: ModelUpdateCommentaireResponse;
  updatePartielleArticle: ModelUpdatePartielleArticleResponse;
};


export type ModelMutationCreateArticleArgs = {
  description: Scalars['String']['input'];
  titre: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type ModelMutationCreateCommentaireArgs = {
  articleId: Scalars['ID']['input'];
  contenu: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type ModelMutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type ModelMutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type ModelMutationDeleteCommentaireArgs = {
  id: Scalars['ID']['input'];
};


export type ModelMutationIncrementNombreDeLikeArgs = {
  id: Scalars['ID']['input'];
};


export type ModelMutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type ModelMutationUpdateArticleArgs = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  titre: Scalars['String']['input'];
};


export type ModelMutationUpdateCommentaireArgs = {
  contenu: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type ModelMutationUpdatePartielleArticleArgs = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  titre: Scalars['String']['input'];
};

export type ModelQuery = {
  __typename?: 'Query';
  doctors?: Maybe<Array<Maybe<ModelDoctor>>>;
  getArticleById?: Maybe<ModelArticle>;
  getArticles?: Maybe<Array<Maybe<ModelArticle>>>;
  getCommentaireByID?: Maybe<ModelCommentaire>;
  getCommentaires?: Maybe<Array<Maybe<ModelCommentaire>>>;
};


export type ModelQueryGetArticleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type ModelQueryGetCommentaireByIdArgs = {
  id: Scalars['ID']['input'];
};

export type ModelSignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type ModelUpdateArticleResponse = {
  __typename?: 'UpdateArticleResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelUpdateCommentaireResponse = {
  __typename?: 'UpdateCommentaireResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelUpdatePartielleArticleResponse = {
  __typename?: 'UpdatePartielleArticleResponse';
  article?: Maybe<ModelArticle>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ModelUser = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ModelResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Commentaire: ResolverTypeWrapper<Commentaire>;
  CreateArticleResponse: ResolverTypeWrapper<Omit<ModelCreateArticleResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  CreateCommentaireResponse: ResolverTypeWrapper<Omit<ModelCreateCommentaireResponse, 'commentaire'> & { commentaire?: Maybe<ModelResolversTypes['Commentaire']> }>;
  CreateUserResponse: ResolverTypeWrapper<ModelCreateUserResponse>;
  DeleteArticleResponse: ResolverTypeWrapper<Omit<ModelDeleteArticleResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  DeleteCommentaireResponse: ResolverTypeWrapper<Omit<ModelDeleteCommentaireResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  Doctor: ResolverTypeWrapper<ModelDoctor>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IncrementNombreDeLikeReponse: ResolverTypeWrapper<Omit<ModelIncrementNombreDeLikeReponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  IncrementNombreDeLikeResponse: ResolverTypeWrapper<Omit<ModelIncrementNombreDeLikeResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<ModelSignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateArticleResponse: ResolverTypeWrapper<Omit<ModelUpdateArticleResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  UpdateCommentaireResponse: ResolverTypeWrapper<Omit<ModelUpdateCommentaireResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  UpdatePartielleArticleResponse: ResolverTypeWrapper<Omit<ModelUpdatePartielleArticleResponse, 'article'> & { article?: Maybe<ModelResolversTypes['Article']> }>;
  User: ResolverTypeWrapper<ModelUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ModelResolversParentTypes = {
  Article: Article;
  Boolean: Scalars['Boolean']['output'];
  Commentaire: Commentaire;
  CreateArticleResponse: Omit<ModelCreateArticleResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  CreateCommentaireResponse: Omit<ModelCreateCommentaireResponse, 'commentaire'> & { commentaire?: Maybe<ModelResolversParentTypes['Commentaire']> };
  CreateUserResponse: ModelCreateUserResponse;
  DeleteArticleResponse: Omit<ModelDeleteArticleResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  DeleteCommentaireResponse: Omit<ModelDeleteCommentaireResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  Doctor: ModelDoctor;
  ID: Scalars['ID']['output'];
  IncrementNombreDeLikeReponse: Omit<ModelIncrementNombreDeLikeReponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  IncrementNombreDeLikeResponse: Omit<ModelIncrementNombreDeLikeResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  SignInResponse: ModelSignInResponse;
  String: Scalars['String']['output'];
  UpdateArticleResponse: Omit<ModelUpdateArticleResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  UpdateCommentaireResponse: Omit<ModelUpdateCommentaireResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  UpdatePartielleArticleResponse: Omit<ModelUpdatePartielleArticleResponse, 'article'> & { article?: Maybe<ModelResolversParentTypes['Article']> };
  User: ModelUser;
};

export type ModelArticleResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['Article'] = ModelResolversParentTypes['Article']> = {
  auteur?: Resolver<ModelResolversTypes['User'], ParentType, ContextType>;
  date?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ModelResolversTypes['ID'], ParentType, ContextType>;
  nombreDeLike?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  titre?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelCommentaireResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['Commentaire'] = ModelResolversParentTypes['Commentaire']> = {
  article?: Resolver<ModelResolversTypes['Article'], ParentType, ContextType>;
  auteur?: Resolver<ModelResolversTypes['User'], ParentType, ContextType>;
  contenu?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ModelResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelCreateArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['CreateArticleResponse'] = ModelResolversParentTypes['CreateArticleResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelCreateCommentaireResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['CreateCommentaireResponse'] = ModelResolversParentTypes['CreateCommentaireResponse']> = {
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  commentaire?: Resolver<Maybe<ModelResolversTypes['Commentaire']>, ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelCreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['CreateUserResponse'] = ModelResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ModelResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelDeleteArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['DeleteArticleResponse'] = ModelResolversParentTypes['DeleteArticleResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelDeleteCommentaireResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['DeleteCommentaireResponse'] = ModelResolversParentTypes['DeleteCommentaireResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelDoctorResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['Doctor'] = ModelResolversParentTypes['Doctor']> = {
  id?: Resolver<ModelResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelIncrementNombreDeLikeReponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['IncrementNombreDeLikeReponse'] = ModelResolversParentTypes['IncrementNombreDeLikeReponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelIncrementNombreDeLikeResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['IncrementNombreDeLikeResponse'] = ModelResolversParentTypes['IncrementNombreDeLikeResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelMutationResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['Mutation'] = ModelResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<ModelResolversTypes['CreateArticleResponse'], ParentType, ContextType, RequireFields<ModelMutationCreateArticleArgs, 'description' | 'titre' | 'userId'>>;
  createCommentaire?: Resolver<ModelResolversTypes['CreateCommentaireResponse'], ParentType, ContextType, RequireFields<ModelMutationCreateCommentaireArgs, 'articleId' | 'contenu' | 'userId'>>;
  createUser?: Resolver<ModelResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<ModelMutationCreateUserArgs, 'password' | 'username'>>;
  deleteArticle?: Resolver<ModelResolversTypes['DeleteArticleResponse'], ParentType, ContextType, RequireFields<ModelMutationDeleteArticleArgs, 'id'>>;
  deleteCommentaire?: Resolver<ModelResolversTypes['DeleteCommentaireResponse'], ParentType, ContextType, RequireFields<ModelMutationDeleteCommentaireArgs, 'id'>>;
  incrementNombreDeLike?: Resolver<ModelResolversTypes['IncrementNombreDeLikeResponse'], ParentType, ContextType, RequireFields<ModelMutationIncrementNombreDeLikeArgs, 'id'>>;
  signIn?: Resolver<ModelResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<ModelMutationSignInArgs, 'password' | 'username'>>;
  updateArticle?: Resolver<ModelResolversTypes['UpdateArticleResponse'], ParentType, ContextType, RequireFields<ModelMutationUpdateArticleArgs, 'description' | 'id' | 'titre'>>;
  updateCommentaire?: Resolver<ModelResolversTypes['UpdateCommentaireResponse'], ParentType, ContextType, RequireFields<ModelMutationUpdateCommentaireArgs, 'contenu' | 'id'>>;
  updatePartielleArticle?: Resolver<ModelResolversTypes['UpdatePartielleArticleResponse'], ParentType, ContextType, RequireFields<ModelMutationUpdatePartielleArticleArgs, 'description' | 'id' | 'titre'>>;
};

export type ModelQueryResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['Query'] = ModelResolversParentTypes['Query']> = {
  doctors?: Resolver<Maybe<Array<Maybe<ModelResolversTypes['Doctor']>>>, ParentType, ContextType>;
  getArticleById?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType, RequireFields<ModelQueryGetArticleByIdArgs, 'id'>>;
  getArticles?: Resolver<Maybe<Array<Maybe<ModelResolversTypes['Article']>>>, ParentType, ContextType>;
  getCommentaireByID?: Resolver<Maybe<ModelResolversTypes['Commentaire']>, ParentType, ContextType, RequireFields<ModelQueryGetCommentaireByIdArgs, 'id'>>;
  getCommentaires?: Resolver<Maybe<Array<Maybe<ModelResolversTypes['Commentaire']>>>, ParentType, ContextType>;
};

export type ModelSignInResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['SignInResponse'] = ModelResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ModelResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelUpdateArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['UpdateArticleResponse'] = ModelResolversParentTypes['UpdateArticleResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelUpdateCommentaireResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['UpdateCommentaireResponse'] = ModelResolversParentTypes['UpdateCommentaireResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelUpdatePartielleArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['UpdatePartielleArticleResponse'] = ModelResolversParentTypes['UpdatePartielleArticleResponse']> = {
  article?: Resolver<Maybe<ModelResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ModelResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ModelResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelUserResolvers<ContextType = DataSourceContext, ParentType extends ModelResolversParentTypes['User'] = ModelResolversParentTypes['User']> = {
  id?: Resolver<ModelResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ModelResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelResolvers<ContextType = DataSourceContext> = {
  Article?: ModelArticleResolvers<ContextType>;
  Commentaire?: ModelCommentaireResolvers<ContextType>;
  CreateArticleResponse?: ModelCreateArticleResponseResolvers<ContextType>;
  CreateCommentaireResponse?: ModelCreateCommentaireResponseResolvers<ContextType>;
  CreateUserResponse?: ModelCreateUserResponseResolvers<ContextType>;
  DeleteArticleResponse?: ModelDeleteArticleResponseResolvers<ContextType>;
  DeleteCommentaireResponse?: ModelDeleteCommentaireResponseResolvers<ContextType>;
  Doctor?: ModelDoctorResolvers<ContextType>;
  IncrementNombreDeLikeReponse?: ModelIncrementNombreDeLikeReponseResolvers<ContextType>;
  IncrementNombreDeLikeResponse?: ModelIncrementNombreDeLikeResponseResolvers<ContextType>;
  Mutation?: ModelMutationResolvers<ContextType>;
  Query?: ModelQueryResolvers<ContextType>;
  SignInResponse?: ModelSignInResponseResolvers<ContextType>;
  UpdateArticleResponse?: ModelUpdateArticleResponseResolvers<ContextType>;
  UpdateCommentaireResponse?: ModelUpdateCommentaireResponseResolvers<ContextType>;
  UpdatePartielleArticleResponse?: ModelUpdatePartielleArticleResponseResolvers<ContextType>;
  User?: ModelUserResolvers<ContextType>;
};

