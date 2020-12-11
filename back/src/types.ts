import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Lecteur = {
  __typename?: 'Lecteur';
  /** numLecteur */
  id: Scalars['ID'];
  nom: Scalars['String'];
  prets?: Maybe<Array<Maybe<Pret>>>;
};

export type Livre = {
  __typename?: 'Livre';
  /** numLivre */
  id: Scalars['ID'];
  design: Scalars['String'];
  auteur: Scalars['String'];
  dateEdition: Scalars['String'];
  dispobible: Scalars['Boolean'];
  nbPret?: Maybe<Scalars['Int']>;
};

export type LivreInput = {
  design: Scalars['String'];
  auteur: Scalars['String'];
  dateEdition: Scalars['String'];
  disponible: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLecteur: Lecteur;
  delLecteur: Scalars['Boolean'];
  addLivre: Livre;
  delLivre: Scalars['Boolean'];
  addPret: Pret;
  delPret: Scalars['Boolean'];
};


export type MutationAddLecteurArgs = {
  nom: Scalars['String'];
};


export type MutationDelLecteurArgs = {
  id: Scalars['String'];
};


export type MutationAddLivreArgs = {
  input: LivreInput;
};


export type MutationDelLivreArgs = {
  id: Scalars['String'];
};


export type MutationAddPretArgs = {
  input: PretInput;
};


export type MutationDelPretArgs = {
  id: Scalars['String'];
};

export type Pret = {
  __typename?: 'Pret';
  id: Scalars['String'];
  livre?: Maybe<Livre>;
  datePret: Scalars['String'];
};

export type PretInput = {
  lecteurId: Scalars['String'];
  livreId: Scalars['String'];
  datePret: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  lecteurs: Array<Lecteur>;
  livres: Array<Livre>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
export type ResolversTypes = {
  Lecteur: ResolverTypeWrapper<Lecteur>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Livre: ResolverTypeWrapper<Livre>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LivreInput: LivreInput;
  Mutation: ResolverTypeWrapper<{}>;
  Pret: ResolverTypeWrapper<Pret>;
  PretInput: PretInput;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Token: ResolverTypeWrapper<Token>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Lecteur: Lecteur;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Livre: Livre;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  LivreInput: LivreInput;
  Mutation: {};
  Pret: Pret;
  PretInput: PretInput;
  Query: {};
  User: User;
  Float: Scalars['Float'];
  Token: Token;
};

export type LecteurResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lecteur'] = ResolversParentTypes['Lecteur']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pret']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LivreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Livre'] = ResolversParentTypes['Livre']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  design?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  auteur?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateEdition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dispobible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nbPret?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addLecteur?: Resolver<ResolversTypes['Lecteur'], ParentType, ContextType, RequireFields<MutationAddLecteurArgs, 'nom'>>;
  delLecteur?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelLecteurArgs, 'id'>>;
  addLivre?: Resolver<ResolversTypes['Livre'], ParentType, ContextType, RequireFields<MutationAddLivreArgs, 'input'>>;
  delLivre?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelLivreArgs, 'id'>>;
  addPret?: Resolver<ResolversTypes['Pret'], ParentType, ContextType, RequireFields<MutationAddPretArgs, 'input'>>;
  delPret?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelPretArgs, 'id'>>;
};

export type PretResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pret'] = ResolversParentTypes['Pret']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  livre?: Resolver<Maybe<ResolversTypes['Livre']>, ParentType, ContextType>;
  datePret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  helloWorld?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lecteurs?: Resolver<Array<ResolversTypes['Lecteur']>, ParentType, ContextType>;
  livres?: Resolver<Array<ResolversTypes['Livre']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Lecteur?: LecteurResolvers<ContextType>;
  Livre?: LivreResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pret?: PretResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
