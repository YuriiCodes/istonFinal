export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Json: any;
  Long: any;
};

export type Article = _Document & _Linkable & {
  __typename?: 'Article';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  published?: Maybe<Scalars['Date']>;
  seo_description?: Maybe<Scalars['Json']>;
  seo_image?: Maybe<Scalars['Json']>;
  seo_title?: Maybe<Scalars['Json']>;
  slices?: Maybe<Array<ArticleSlices>>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type ArticleConnectionConnection = {
  __typename?: 'ArticleConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ArticleConnectionEdge = {
  __typename?: 'ArticleConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Article;
};

export type ArticleSlices = ArticleSlicesImage | ArticleSlicesText | ArticleSlicesVideo;

export type ArticleSlicesImage = {
  __typename?: 'ArticleSlicesImage';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<ArticleSlicesImageVariation>;
};

export type ArticleSlicesImageDefault = {
  __typename?: 'ArticleSlicesImageDefault';
  primary?: Maybe<ArticleSlicesImageDefaultPrimary>;
};

export type ArticleSlicesImageDefaultPrimary = {
  __typename?: 'ArticleSlicesImageDefaultPrimary';
  image?: Maybe<Scalars['Json']>;
};

export type ArticleSlicesImageVariation = ArticleSlicesImageDefault;

export type ArticleSlicesText = {
  __typename?: 'ArticleSlicesText';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<ArticleSlicesTextVariation>;
};

export type ArticleSlicesTextDefault = {
  __typename?: 'ArticleSlicesTextDefault';
  primary?: Maybe<ArticleSlicesTextDefaultPrimary>;
};

export type ArticleSlicesTextDefaultPrimary = {
  __typename?: 'ArticleSlicesTextDefaultPrimary';
  text?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type ArticleSlicesTextVariation = ArticleSlicesTextDefault;

export type ArticleSlicesVideo = {
  __typename?: 'ArticleSlicesVideo';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<ArticleSlicesVideoVariation>;
};

export type ArticleSlicesVideoDefault = {
  __typename?: 'ArticleSlicesVideoDefault';
  primary?: Maybe<ArticleSlicesVideoDefaultPrimary>;
};

export type ArticleSlicesVideoDefaultPrimary = {
  __typename?: 'ArticleSlicesVideoDefaultPrimary';
  caption?: Maybe<Scalars['Json']>;
  poster?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  video?: Maybe<Scalars['Json']>;
};

export type ArticleSlicesVideoVariation = ArticleSlicesVideoDefault;

export type Frontpage = _Document & _Linkable & {
  __typename?: 'Frontpage';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  seo_description?: Maybe<Scalars['Json']>;
  seo_image?: Maybe<Scalars['Json']>;
  seo_title?: Maybe<Scalars['Json']>;
  slices?: Maybe<Array<FrontpageSlices>>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type FrontpageConnectionConnection = {
  __typename?: 'FrontpageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FrontpageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type FrontpageConnectionEdge = {
  __typename?: 'FrontpageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Frontpage;
};

export type FrontpageSlices = FrontpageSlicesHome_Hero_Slice | FrontpageSlicesImage | FrontpageSlicesInteresting_Links | FrontpageSlicesMarketing_Block | FrontpageSlicesSlide_Show | FrontpageSlicesText | FrontpageSlicesVideo;

export type FrontpageSlicesHome_Hero_Slice = {
  __typename?: 'FrontpageSlicesHome_hero_slice';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesHome_Hero_SliceVariation>;
};

export type FrontpageSlicesHome_Hero_SliceDefault = {
  __typename?: 'FrontpageSlicesHome_hero_sliceDefault';
  primary?: Maybe<FrontpageSlicesHome_Hero_SliceDefaultPrimary>;
};

export type FrontpageSlicesHome_Hero_SliceDefaultPrimary = {
  __typename?: 'FrontpageSlicesHome_hero_sliceDefaultPrimary';
  ctalink?: Maybe<_Linkable>;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  secondatytitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesHome_Hero_SliceVariation = FrontpageSlicesHome_Hero_SliceDefault;

export type FrontpageSlicesImage = {
  __typename?: 'FrontpageSlicesImage';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesImageVariation>;
};

export type FrontpageSlicesImageDefault = {
  __typename?: 'FrontpageSlicesImageDefault';
  primary?: Maybe<FrontpageSlicesImageDefaultPrimary>;
};

export type FrontpageSlicesImageDefaultPrimary = {
  __typename?: 'FrontpageSlicesImageDefaultPrimary';
  image?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesImageVariation = FrontpageSlicesImageDefault;

export type FrontpageSlicesInteresting_Links = {
  __typename?: 'FrontpageSlicesInteresting_links';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesInteresting_LinksVariation>;
};

export type FrontpageSlicesInteresting_LinksDefault = {
  __typename?: 'FrontpageSlicesInteresting_linksDefault';
  primary?: Maybe<FrontpageSlicesInteresting_LinksDefaultPrimary>;
};

export type FrontpageSlicesInteresting_LinksDefaultPrimary = {
  __typename?: 'FrontpageSlicesInteresting_linksDefaultPrimary';
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  link1?: Maybe<_Linkable>;
  link1text?: Maybe<Scalars['String']>;
  link2?: Maybe<_Linkable>;
  link2text?: Maybe<Scalars['String']>;
  link3?: Maybe<_Linkable>;
  link3text?: Maybe<Scalars['String']>;
  link4?: Maybe<_Linkable>;
  link4text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesInteresting_LinksVariation = FrontpageSlicesInteresting_LinksDefault;

export type FrontpageSlicesMarketing_Block = {
  __typename?: 'FrontpageSlicesMarketing_block';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesMarketing_BlockVariation>;
};

export type FrontpageSlicesMarketing_BlockDefault = {
  __typename?: 'FrontpageSlicesMarketing_blockDefault';
  primary?: Maybe<FrontpageSlicesMarketing_BlockDefaultPrimary>;
};

export type FrontpageSlicesMarketing_BlockDefaultPrimary = {
  __typename?: 'FrontpageSlicesMarketing_blockDefaultPrimary';
  ctalink?: Maybe<_Linkable>;
  image?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['String']>;
};

export type FrontpageSlicesMarketing_BlockVariation = FrontpageSlicesMarketing_BlockDefault;

export type FrontpageSlicesSlide_Show = {
  __typename?: 'FrontpageSlicesSlide_show';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesSlide_ShowVariation>;
};

export type FrontpageSlicesSlide_ShowDefault = {
  __typename?: 'FrontpageSlicesSlide_showDefault';
  items?: Maybe<Array<FrontpageSlicesSlide_ShowDefaultItems>>;
  primary?: Maybe<FrontpageSlicesSlide_ShowDefaultPrimary>;
};

export type FrontpageSlicesSlide_ShowDefaultItems = {
  __typename?: 'FrontpageSlicesSlide_showDefaultItems';
  image1?: Maybe<Scalars['Json']>;
  image2?: Maybe<Scalars['Json']>;
  image3?: Maybe<Scalars['Json']>;
  image4?: Maybe<Scalars['Json']>;
  image5?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesSlide_ShowDefaultPrimary = {
  __typename?: 'FrontpageSlicesSlide_showDefaultPrimary';
  title?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesSlide_ShowVariation = FrontpageSlicesSlide_ShowDefault;

export type FrontpageSlicesText = {
  __typename?: 'FrontpageSlicesText';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesTextVariation>;
};

export type FrontpageSlicesTextDefault = {
  __typename?: 'FrontpageSlicesTextDefault';
  primary?: Maybe<FrontpageSlicesTextDefaultPrimary>;
};

export type FrontpageSlicesTextDefaultPrimary = {
  __typename?: 'FrontpageSlicesTextDefaultPrimary';
  text?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesTextVariation = FrontpageSlicesTextDefault;

export type FrontpageSlicesVideo = {
  __typename?: 'FrontpageSlicesVideo';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<FrontpageSlicesVideoVariation>;
};

export type FrontpageSlicesVideoDefault = {
  __typename?: 'FrontpageSlicesVideoDefault';
  primary?: Maybe<FrontpageSlicesVideoDefaultPrimary>;
};

export type FrontpageSlicesVideoDefaultPrimary = {
  __typename?: 'FrontpageSlicesVideoDefaultPrimary';
  caption?: Maybe<Scalars['Json']>;
  poster?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  video?: Maybe<Scalars['Json']>;
};

export type FrontpageSlicesVideoVariation = FrontpageSlicesVideoDefault;

export type Layout = _Document & _Linkable & {
  __typename?: 'Layout';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  default_seo_description?: Maybe<Scalars['Json']>;
  default_seo_image?: Maybe<Scalars['Json']>;
  default_seo_title?: Maybe<Scalars['Json']>;
  seo_title_template?: Maybe<Scalars['Json']>;
  title_template?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type LayoutConnectionConnection = {
  __typename?: 'LayoutConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LayoutConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type LayoutConnectionEdge = {
  __typename?: 'LayoutConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Layout;
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export type Page = _Document & _Linkable & {
  __typename?: 'Page';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  seo_description?: Maybe<Scalars['Json']>;
  seo_image?: Maybe<Scalars['Json']>;
  seo_title?: Maybe<Scalars['Json']>;
  slices?: Maybe<Array<PageSlices>>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PageConnectionConnection = {
  __typename?: 'PageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
  __typename?: 'PageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageSlices = PageSlicesImage | PageSlicesText | PageSlicesVideo;

export type PageSlicesImage = {
  __typename?: 'PageSlicesImage';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PageSlicesImageVariation>;
};

export type PageSlicesImageDefault = {
  __typename?: 'PageSlicesImageDefault';
  primary?: Maybe<PageSlicesImageDefaultPrimary>;
};

export type PageSlicesImageDefaultPrimary = {
  __typename?: 'PageSlicesImageDefaultPrimary';
  image?: Maybe<Scalars['Json']>;
};

export type PageSlicesImageVariation = PageSlicesImageDefault;

export type PageSlicesText = {
  __typename?: 'PageSlicesText';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PageSlicesTextVariation>;
};

export type PageSlicesTextDefault = {
  __typename?: 'PageSlicesTextDefault';
  primary?: Maybe<PageSlicesTextDefaultPrimary>;
};

export type PageSlicesTextDefaultPrimary = {
  __typename?: 'PageSlicesTextDefaultPrimary';
  text?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type PageSlicesTextVariation = PageSlicesTextDefault;

export type PageSlicesVideo = {
  __typename?: 'PageSlicesVideo';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PageSlicesVideoVariation>;
};

export type PageSlicesVideoDefault = {
  __typename?: 'PageSlicesVideoDefault';
  primary?: Maybe<PageSlicesVideoDefaultPrimary>;
};

export type PageSlicesVideoDefaultPrimary = {
  __typename?: 'PageSlicesVideoDefaultPrimary';
  caption?: Maybe<Scalars['Json']>;
  poster?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  video?: Maybe<Scalars['Json']>;
};

export type PageSlicesVideoVariation = PageSlicesVideoDefault;

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allArticles: ArticleConnectionConnection;
  allFrontpages: FrontpageConnectionConnection;
  allLayouts: LayoutConnectionConnection;
  allPages: PageConnectionConnection;
  article?: Maybe<Article>;
  frontpage?: Maybe<Frontpage>;
  layout?: Maybe<Layout>;
  page?: Maybe<Page>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortArticley>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereArticle>;
};


export type QueryAllFrontpagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortFrontpagey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereFrontpage>;
};


export type QueryAllLayoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortLayouty>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereLayout>;
};


export type QueryAllPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPagey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WherePage>;
};


export type QueryArticleArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFrontpageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryLayoutArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export enum SortArticley {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortFrontpagey {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortLayouty {
  DefaultSeoDescriptionAsc = 'default_seo_description_ASC',
  DefaultSeoDescriptionDesc = 'default_seo_description_DESC',
  DefaultSeoTitleAsc = 'default_seo_title_ASC',
  DefaultSeoTitleDesc = 'default_seo_title_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoTitleTemplateAsc = 'seo_title_template_ASC',
  SeoTitleTemplateDesc = 'seo_title_template_DESC',
  TitleTemplateAsc = 'title_template_ASC',
  TitleTemplateDesc = 'title_template_DESC'
}

export enum SortPagey {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereArticle = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** published */
  published?: InputMaybe<Scalars['Date']>;
  /** published */
  published_after?: InputMaybe<Scalars['Date']>;
  /** published */
  published_before?: InputMaybe<Scalars['Date']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereFrontpage = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereLayout = {
  /** default_seo_description */
  default_seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** default_seo_title */
  default_seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title_template */
  seo_title_template_fulltext?: InputMaybe<Scalars['String']>;
  /** title_template */
  title_template_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePage = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};
