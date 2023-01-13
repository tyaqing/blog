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
  GraphQLStringOrFloat: any;
  JSON: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  packages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type App = {
  __typename?: 'app';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Directus_Files>;
  menu?: Maybe<Menu>;
  name: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  tags?: Maybe<Array<Maybe<App_Tag>>>;
  tags_func?: Maybe<Count_Functions>;
  url?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type AppLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppMenuArgs = {
  filter?: InputMaybe<Menu_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppTagsArgs = {
  filter?: InputMaybe<App_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type App_Aggregated = {
  __typename?: 'app_aggregated';
  avg?: Maybe<App_Aggregated_Fields>;
  avgDistinct?: Maybe<App_Aggregated_Fields>;
  count?: Maybe<App_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<App_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<App_Aggregated_Fields>;
  min?: Maybe<App_Aggregated_Fields>;
  sum?: Maybe<App_Aggregated_Fields>;
  sumDistinct?: Maybe<App_Aggregated_Fields>;
};

export type App_Aggregated_Count = {
  __typename?: 'app_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  desc?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['Int']>;
  menu?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type App_Aggregated_Fields = {
  __typename?: 'app_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  menu?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type App_Filter = {
  _and?: InputMaybe<Array<InputMaybe<App_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<App_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  desc?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  menu?: InputMaybe<Menu_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<App_Tag_Filter>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type App_Tag = {
  __typename?: 'app_tag';
  app_id?: Maybe<App>;
  id?: Maybe<Scalars['ID']>;
  tag_id?: Maybe<Tag>;
};


export type App_TagApp_IdArgs = {
  filter?: InputMaybe<App_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type App_TagTag_IdArgs = {
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type App_Tag_Aggregated = {
  __typename?: 'app_tag_aggregated';
  avg?: Maybe<App_Tag_Aggregated_Fields>;
  avgDistinct?: Maybe<App_Tag_Aggregated_Fields>;
  count?: Maybe<App_Tag_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<App_Tag_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<App_Tag_Aggregated_Fields>;
  min?: Maybe<App_Tag_Aggregated_Fields>;
  sum?: Maybe<App_Tag_Aggregated_Fields>;
  sumDistinct?: Maybe<App_Tag_Aggregated_Fields>;
};

export type App_Tag_Aggregated_Count = {
  __typename?: 'app_tag_aggregated_count';
  app_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

export type App_Tag_Aggregated_Fields = {
  __typename?: 'app_tag_aggregated_fields';
  app_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

export type App_Tag_Filter = {
  _and?: InputMaybe<Array<InputMaybe<App_Tag_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<App_Tag_Filter>>>;
  app_id?: InputMaybe<App_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  tag_id?: InputMaybe<Tag_Filter>;
};

export type Blog = {
  __typename?: 'blog';
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Blog_Aggregated = {
  __typename?: 'blog_aggregated';
  avg?: Maybe<Blog_Aggregated_Fields>;
  avgDistinct?: Maybe<Blog_Aggregated_Fields>;
  count?: Maybe<Blog_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Blog_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Blog_Aggregated_Fields>;
  min?: Maybe<Blog_Aggregated_Fields>;
  sum?: Maybe<Blog_Aggregated_Fields>;
  sumDistinct?: Maybe<Blog_Aggregated_Fields>;
};

export type Blog_Aggregated_Count = {
  __typename?: 'blog_aggregated_count';
  content?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Blog_Aggregated_Fields = {
  __typename?: 'blog_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Blog_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Scalars['String']>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Menu = {
  __typename?: 'menu';
  color?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  icon?: Maybe<Directus_Files>;
  iconName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type MenuIconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menu_Aggregated = {
  __typename?: 'menu_aggregated';
  avg?: Maybe<Menu_Aggregated_Fields>;
  avgDistinct?: Maybe<Menu_Aggregated_Fields>;
  count?: Maybe<Menu_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Menu_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Menu_Aggregated_Fields>;
  min?: Maybe<Menu_Aggregated_Fields>;
  sum?: Maybe<Menu_Aggregated_Fields>;
  sumDistinct?: Maybe<Menu_Aggregated_Fields>;
};

export type Menu_Aggregated_Count = {
  __typename?: 'menu_aggregated_count';
  color?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  iconName?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Menu_Aggregated_Fields = {
  __typename?: 'menu_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Menu_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Menu_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<Directus_Files_Filter>;
  iconName?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  actionName?: Maybe<SampleOutput>;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};

export type Npmvs_Lucky_Packages_Args = {
  num?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "npmvs.package" */
export type Npmvs_Package = {
  __typename?: 'npmvs_package';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  package_tags: Array<Npmvs_Package_Tag>;
  /** An aggregate relationship */
  package_tags_aggregate: Npmvs_Package_Tag_Aggregate;
  weight: Scalars['Int'];
};


/** columns and relationships of "npmvs.package" */
export type Npmvs_PackagePackage_TagsArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


/** columns and relationships of "npmvs.package" */
export type Npmvs_PackagePackage_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};

export type Npmvs_Package_Aggregate = {
  __typename?: 'npmvs_package_aggregate';
  aggregate?: Maybe<Npmvs_Package_Aggregate_Fields>;
  nodes: Array<Npmvs_Package>;
};

/** aggregate fields of "npmvs.package" */
export type Npmvs_Package_Aggregate_Fields = {
  __typename?: 'npmvs_package_aggregate_fields';
  avg?: Maybe<Npmvs_Package_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Npmvs_Package_Max_Fields>;
  min?: Maybe<Npmvs_Package_Min_Fields>;
  stddev?: Maybe<Npmvs_Package_Stddev_Fields>;
  stddev_pop?: Maybe<Npmvs_Package_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Npmvs_Package_Stddev_Samp_Fields>;
  sum?: Maybe<Npmvs_Package_Sum_Fields>;
  var_pop?: Maybe<Npmvs_Package_Var_Pop_Fields>;
  var_samp?: Maybe<Npmvs_Package_Var_Samp_Fields>;
  variance?: Maybe<Npmvs_Package_Variance_Fields>;
};


/** aggregate fields of "npmvs.package" */
export type Npmvs_Package_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Npmvs_Package_Avg_Fields = {
  __typename?: 'npmvs_package_avg_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "npmvs.package". All fields are combined with a logical 'AND'. */
export type Npmvs_Package_Bool_Exp = {
  _and?: InputMaybe<Array<Npmvs_Package_Bool_Exp>>;
  _not?: InputMaybe<Npmvs_Package_Bool_Exp>;
  _or?: InputMaybe<Array<Npmvs_Package_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package_tags?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
  package_tags_aggregate?: InputMaybe<Npmvs_Package_Tag_Aggregate_Bool_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Npmvs_Package_Max_Fields = {
  __typename?: 'npmvs_package_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Npmvs_Package_Min_Fields = {
  __typename?: 'npmvs_package_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "npmvs.package". */
export type Npmvs_Package_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package_tags_aggregate?: InputMaybe<Npmvs_Package_Tag_Aggregate_Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "npmvs.package" */
export enum Npmvs_Package_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Weight = 'weight'
}

/** aggregate stddev on columns */
export type Npmvs_Package_Stddev_Fields = {
  __typename?: 'npmvs_package_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Npmvs_Package_Stddev_Pop_Fields = {
  __typename?: 'npmvs_package_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Npmvs_Package_Stddev_Samp_Fields = {
  __typename?: 'npmvs_package_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "npmvs_package" */
export type Npmvs_Package_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Npmvs_Package_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Npmvs_Package_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Npmvs_Package_Sum_Fields = {
  __typename?: 'npmvs_package_sum_fields';
  id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "npmvs.package_tag" */
export type Npmvs_Package_Tag = {
  __typename?: 'npmvs_package_tag';
  id: Scalars['Int'];
  /** An object relationship */
  package: Npmvs_Package;
  package_id: Scalars['Int'];
  /** An object relationship */
  tag: Npmvs_Tag;
  tag_id: Scalars['Int'];
};

/** aggregated selection of "npmvs.package_tag" */
export type Npmvs_Package_Tag_Aggregate = {
  __typename?: 'npmvs_package_tag_aggregate';
  aggregate?: Maybe<Npmvs_Package_Tag_Aggregate_Fields>;
  nodes: Array<Npmvs_Package_Tag>;
};

export type Npmvs_Package_Tag_Aggregate_Bool_Exp = {
  count?: InputMaybe<Npmvs_Package_Tag_Aggregate_Bool_Exp_Count>;
};

export type Npmvs_Package_Tag_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "npmvs.package_tag" */
export type Npmvs_Package_Tag_Aggregate_Fields = {
  __typename?: 'npmvs_package_tag_aggregate_fields';
  avg?: Maybe<Npmvs_Package_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Npmvs_Package_Tag_Max_Fields>;
  min?: Maybe<Npmvs_Package_Tag_Min_Fields>;
  stddev?: Maybe<Npmvs_Package_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Npmvs_Package_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Npmvs_Package_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Npmvs_Package_Tag_Sum_Fields>;
  var_pop?: Maybe<Npmvs_Package_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Npmvs_Package_Tag_Var_Samp_Fields>;
  variance?: Maybe<Npmvs_Package_Tag_Variance_Fields>;
};


/** aggregate fields of "npmvs.package_tag" */
export type Npmvs_Package_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Aggregate_Order_By = {
  avg?: InputMaybe<Npmvs_Package_Tag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Npmvs_Package_Tag_Max_Order_By>;
  min?: InputMaybe<Npmvs_Package_Tag_Min_Order_By>;
  stddev?: InputMaybe<Npmvs_Package_Tag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Npmvs_Package_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Npmvs_Package_Tag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Npmvs_Package_Tag_Sum_Order_By>;
  var_pop?: InputMaybe<Npmvs_Package_Tag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Npmvs_Package_Tag_Var_Samp_Order_By>;
  variance?: InputMaybe<Npmvs_Package_Tag_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Npmvs_Package_Tag_Avg_Fields = {
  __typename?: 'npmvs_package_tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "npmvs.package_tag". All fields are combined with a logical 'AND'. */
export type Npmvs_Package_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Npmvs_Package_Tag_Bool_Exp>>;
  _not?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Npmvs_Package_Tag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  package?: InputMaybe<Npmvs_Package_Bool_Exp>;
  package_id?: InputMaybe<Int_Comparison_Exp>;
  tag?: InputMaybe<Npmvs_Tag_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Npmvs_Package_Tag_Max_Fields = {
  __typename?: 'npmvs_package_tag_max_fields';
  id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Npmvs_Package_Tag_Min_Fields = {
  __typename?: 'npmvs_package_tag_min_fields';
  id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "npmvs.package_tag". */
export type Npmvs_Package_Tag_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Npmvs_Package_Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Npmvs_Tag_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** select columns of table "npmvs.package_tag" */
export enum Npmvs_Package_Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PackageId = 'package_id',
  /** column name */
  TagId = 'tag_id'
}

/** aggregate stddev on columns */
export type Npmvs_Package_Tag_Stddev_Fields = {
  __typename?: 'npmvs_package_tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Npmvs_Package_Tag_Stddev_Pop_Fields = {
  __typename?: 'npmvs_package_tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Npmvs_Package_Tag_Stddev_Samp_Fields = {
  __typename?: 'npmvs_package_tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "npmvs_package_tag" */
export type Npmvs_Package_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Npmvs_Package_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Npmvs_Package_Tag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  package_id?: InputMaybe<Scalars['Int']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Npmvs_Package_Tag_Sum_Fields = {
  __typename?: 'npmvs_package_tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Npmvs_Package_Tag_Var_Pop_Fields = {
  __typename?: 'npmvs_package_tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Npmvs_Package_Tag_Var_Samp_Fields = {
  __typename?: 'npmvs_package_tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Npmvs_Package_Tag_Variance_Fields = {
  __typename?: 'npmvs_package_tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Npmvs_Package_Var_Pop_Fields = {
  __typename?: 'npmvs_package_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Npmvs_Package_Var_Samp_Fields = {
  __typename?: 'npmvs_package_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Npmvs_Package_Variance_Fields = {
  __typename?: 'npmvs_package_variance_fields';
  id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "npmvs.tag" */
export type Npmvs_Tag = {
  __typename?: 'npmvs_tag';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  package_tags: Array<Npmvs_Package_Tag>;
  /** An aggregate relationship */
  package_tags_aggregate: Npmvs_Package_Tag_Aggregate;
};


/** columns and relationships of "npmvs.tag" */
export type Npmvs_TagPackage_TagsArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


/** columns and relationships of "npmvs.tag" */
export type Npmvs_TagPackage_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};

/** aggregated selection of "npmvs.tag" */
export type Npmvs_Tag_Aggregate = {
  __typename?: 'npmvs_tag_aggregate';
  aggregate?: Maybe<Npmvs_Tag_Aggregate_Fields>;
  nodes: Array<Npmvs_Tag>;
};

/** aggregate fields of "npmvs.tag" */
export type Npmvs_Tag_Aggregate_Fields = {
  __typename?: 'npmvs_tag_aggregate_fields';
  avg?: Maybe<Npmvs_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Npmvs_Tag_Max_Fields>;
  min?: Maybe<Npmvs_Tag_Min_Fields>;
  stddev?: Maybe<Npmvs_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Npmvs_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Npmvs_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Npmvs_Tag_Sum_Fields>;
  var_pop?: Maybe<Npmvs_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Npmvs_Tag_Var_Samp_Fields>;
  variance?: Maybe<Npmvs_Tag_Variance_Fields>;
};


/** aggregate fields of "npmvs.tag" */
export type Npmvs_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Npmvs_Tag_Avg_Fields = {
  __typename?: 'npmvs_tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "npmvs.tag". All fields are combined with a logical 'AND'. */
export type Npmvs_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Npmvs_Tag_Bool_Exp>>;
  _not?: InputMaybe<Npmvs_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Npmvs_Tag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package_tags?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
  package_tags_aggregate?: InputMaybe<Npmvs_Package_Tag_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Npmvs_Tag_Max_Fields = {
  __typename?: 'npmvs_tag_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Npmvs_Tag_Min_Fields = {
  __typename?: 'npmvs_tag_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "npmvs.tag". */
export type Npmvs_Tag_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package_tags_aggregate?: InputMaybe<Npmvs_Package_Tag_Aggregate_Order_By>;
};

/** select columns of table "npmvs.tag" */
export enum Npmvs_Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate stddev on columns */
export type Npmvs_Tag_Stddev_Fields = {
  __typename?: 'npmvs_tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Npmvs_Tag_Stddev_Pop_Fields = {
  __typename?: 'npmvs_tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Npmvs_Tag_Stddev_Samp_Fields = {
  __typename?: 'npmvs_tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "npmvs_tag" */
export type Npmvs_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Npmvs_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Npmvs_Tag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Npmvs_Tag_Sum_Fields = {
  __typename?: 'npmvs_tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Npmvs_Tag_Var_Pop_Fields = {
  __typename?: 'npmvs_tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Npmvs_Tag_Var_Samp_Fields = {
  __typename?: 'npmvs_tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Npmvs_Tag_Variance_Fields = {
  __typename?: 'npmvs_tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Pappstore_Config = {
  __typename?: 'pappstore_config';
  blog?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Directus_Files>;
  md?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type Pappstore_ConfigLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  app: Array<App>;
  app_aggregated: Array<App_Aggregated>;
  app_by_id?: Maybe<App>;
  app_tag: Array<App_Tag>;
  app_tag_aggregated: Array<App_Tag_Aggregated>;
  app_tag_by_id?: Maybe<App_Tag>;
  blog: Array<Blog>;
  blog_aggregated: Array<Blog_Aggregated>;
  blog_by_id?: Maybe<Blog>;
  menu: Array<Menu>;
  menu_aggregated: Array<Menu_Aggregated>;
  menu_by_id?: Maybe<Menu>;
  /** execute function "npmvs.lucky_packages" which returns "npmvs.package" */
  npmvs_lucky_packages: Array<Npmvs_Package>;
  /** execute function "npmvs.lucky_packages" and query aggregates on result of table type "npmvs.package" */
  npmvs_lucky_packages_aggregate: Npmvs_Package_Aggregate;
  /** fetch data from the table: "npmvs.package" */
  npmvs_package: Array<Npmvs_Package>;
  /** fetch aggregated fields from the table: "npmvs.package" */
  npmvs_package_aggregate: Npmvs_Package_Aggregate;
  /** fetch data from the table: "npmvs.package" using primary key columns */
  npmvs_package_by_pk?: Maybe<Npmvs_Package>;
  /** fetch data from the table: "npmvs.package_tag" */
  npmvs_package_tag: Array<Npmvs_Package_Tag>;
  /** fetch aggregated fields from the table: "npmvs.package_tag" */
  npmvs_package_tag_aggregate: Npmvs_Package_Tag_Aggregate;
  /** fetch data from the table: "npmvs.package_tag" using primary key columns */
  npmvs_package_tag_by_pk?: Maybe<Npmvs_Package_Tag>;
  /** fetch data from the table: "npmvs.tag" */
  npmvs_tag: Array<Npmvs_Tag>;
  /** fetch aggregated fields from the table: "npmvs.tag" */
  npmvs_tag_aggregate: Npmvs_Tag_Aggregate;
  /** fetch data from the table: "npmvs.tag" using primary key columns */
  npmvs_tag_by_pk?: Maybe<Npmvs_Tag>;
  pappstore_config?: Maybe<Pappstore_Config>;
  slider: Array<Slider>;
  slider_aggregated: Array<Slider_Aggregated>;
  slider_by_id?: Maybe<Slider>;
  tag: Array<Tag>;
  tag_aggregated: Array<Tag_Aggregated>;
  tag_by_id?: Maybe<Tag>;
  topic: Array<Topic>;
  topic_aggregated: Array<Topic_Aggregated>;
  topic_app: Array<Topic_App>;
  topic_app_aggregated: Array<Topic_App_Aggregated>;
  topic_app_by_id?: Maybe<Topic_App>;
  topic_by_id?: Maybe<Topic>;
};


export type Query_RootAppArgs = {
  filter?: InputMaybe<App_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootApp_AggregatedArgs = {
  filter?: InputMaybe<App_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootApp_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootApp_TagArgs = {
  filter?: InputMaybe<App_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootApp_Tag_AggregatedArgs = {
  filter?: InputMaybe<App_Tag_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootApp_Tag_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootBlogArgs = {
  filter?: InputMaybe<Blog_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootBlog_AggregatedArgs = {
  filter?: InputMaybe<Blog_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootBlog_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootMenuArgs = {
  filter?: InputMaybe<Menu_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootMenu_AggregatedArgs = {
  filter?: InputMaybe<Menu_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootMenu_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootNpmvs_Lucky_PackagesArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_Lucky_Packages_AggregateArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_PackageArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_Package_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_Package_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNpmvs_Package_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_Package_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_Package_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNpmvs_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSliderArgs = {
  filter?: InputMaybe<Slider_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootSlider_AggregatedArgs = {
  filter?: InputMaybe<Slider_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootSlider_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootTagArgs = {
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootTag_AggregatedArgs = {
  filter?: InputMaybe<Tag_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootTag_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootTopicArgs = {
  filter?: InputMaybe<Topic_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootTopic_AggregatedArgs = {
  filter?: InputMaybe<Topic_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootTopic_AppArgs = {
  filter?: InputMaybe<Topic_App_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootTopic_App_AggregatedArgs = {
  filter?: InputMaybe<Topic_App_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootTopic_App_By_IdArgs = {
  id: Scalars['ID'];
};


export type Query_RootTopic_By_IdArgs = {
  id: Scalars['ID'];
};

export type Slider = {
  __typename?: 'slider';
  app?: Maybe<App>;
  banner?: Maybe<Directus_Files>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type SliderAppArgs = {
  filter?: InputMaybe<App_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SliderBannerArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Slider_Aggregated = {
  __typename?: 'slider_aggregated';
  avg?: Maybe<Slider_Aggregated_Fields>;
  avgDistinct?: Maybe<Slider_Aggregated_Fields>;
  count?: Maybe<Slider_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Slider_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Slider_Aggregated_Fields>;
  min?: Maybe<Slider_Aggregated_Fields>;
  sum?: Maybe<Slider_Aggregated_Fields>;
  sumDistinct?: Maybe<Slider_Aggregated_Fields>;
};

export type Slider_Aggregated_Count = {
  __typename?: 'slider_aggregated_count';
  app?: Maybe<Scalars['Int']>;
  banner?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Slider_Aggregated_Fields = {
  __typename?: 'slider_aggregated_fields';
  app?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Slider_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Slider_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Slider_Filter>>>;
  app?: InputMaybe<App_Filter>;
  banner?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** execute function "npmvs.lucky_packages" which returns "npmvs.package" */
  npmvs_lucky_packages: Array<Npmvs_Package>;
  /** execute function "npmvs.lucky_packages" and query aggregates on result of table type "npmvs.package" */
  npmvs_lucky_packages_aggregate: Npmvs_Package_Aggregate;
  /** fetch data from the table: "npmvs.package" */
  npmvs_package: Array<Npmvs_Package>;
  /** fetch aggregated fields from the table: "npmvs.package" */
  npmvs_package_aggregate: Npmvs_Package_Aggregate;
  /** fetch data from the table: "npmvs.package" using primary key columns */
  npmvs_package_by_pk?: Maybe<Npmvs_Package>;
  /** fetch data from the table in a streaming manner: "npmvs.package" */
  npmvs_package_stream: Array<Npmvs_Package>;
  /** fetch data from the table: "npmvs.package_tag" */
  npmvs_package_tag: Array<Npmvs_Package_Tag>;
  /** fetch aggregated fields from the table: "npmvs.package_tag" */
  npmvs_package_tag_aggregate: Npmvs_Package_Tag_Aggregate;
  /** fetch data from the table: "npmvs.package_tag" using primary key columns */
  npmvs_package_tag_by_pk?: Maybe<Npmvs_Package_Tag>;
  /** fetch data from the table in a streaming manner: "npmvs.package_tag" */
  npmvs_package_tag_stream: Array<Npmvs_Package_Tag>;
  /** fetch data from the table: "npmvs.tag" */
  npmvs_tag: Array<Npmvs_Tag>;
  /** fetch aggregated fields from the table: "npmvs.tag" */
  npmvs_tag_aggregate: Npmvs_Tag_Aggregate;
  /** fetch data from the table: "npmvs.tag" using primary key columns */
  npmvs_tag_by_pk?: Maybe<Npmvs_Tag>;
  /** fetch data from the table in a streaming manner: "npmvs.tag" */
  npmvs_tag_stream: Array<Npmvs_Tag>;
};


export type Subscription_RootNpmvs_Lucky_PackagesArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Lucky_Packages_AggregateArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_PackageArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNpmvs_Package_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Npmvs_Package_Stream_Cursor_Input>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNpmvs_Package_Tag_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Npmvs_Package_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNpmvs_Tag_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Npmvs_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};

export type Tag = {
  __typename?: 'tag';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Tag_Aggregated = {
  __typename?: 'tag_aggregated';
  avg?: Maybe<Tag_Aggregated_Fields>;
  avgDistinct?: Maybe<Tag_Aggregated_Fields>;
  count?: Maybe<Tag_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Tag_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Tag_Aggregated_Fields>;
  min?: Maybe<Tag_Aggregated_Fields>;
  sum?: Maybe<Tag_Aggregated_Fields>;
  sumDistinct?: Maybe<Tag_Aggregated_Fields>;
};

export type Tag_Aggregated_Count = {
  __typename?: 'tag_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Tag_Aggregated_Fields = {
  __typename?: 'tag_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Tag_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tag_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Topic = {
  __typename?: 'topic';
  app?: Maybe<Array<Maybe<Topic_App>>>;
  app_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type TopicAppArgs = {
  filter?: InputMaybe<Topic_App_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Topic_Aggregated = {
  __typename?: 'topic_aggregated';
  avg?: Maybe<Topic_Aggregated_Fields>;
  avgDistinct?: Maybe<Topic_Aggregated_Fields>;
  count?: Maybe<Topic_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Topic_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Topic_Aggregated_Fields>;
  min?: Maybe<Topic_Aggregated_Fields>;
  sum?: Maybe<Topic_Aggregated_Fields>;
  sumDistinct?: Maybe<Topic_Aggregated_Fields>;
};

export type Topic_Aggregated_Count = {
  __typename?: 'topic_aggregated_count';
  app?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Topic_Aggregated_Fields = {
  __typename?: 'topic_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Topic_App = {
  __typename?: 'topic_app';
  app_id?: Maybe<App>;
  app_topic_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  topic_id?: Maybe<Topic>;
};


export type Topic_AppApp_IdArgs = {
  filter?: InputMaybe<App_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Topic_AppTopic_IdArgs = {
  filter?: InputMaybe<Topic_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Topic_App_Aggregated = {
  __typename?: 'topic_app_aggregated';
  avg?: Maybe<Topic_App_Aggregated_Fields>;
  avgDistinct?: Maybe<Topic_App_Aggregated_Fields>;
  count?: Maybe<Topic_App_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Topic_App_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Topic_App_Aggregated_Fields>;
  min?: Maybe<Topic_App_Aggregated_Fields>;
  sum?: Maybe<Topic_App_Aggregated_Fields>;
  sumDistinct?: Maybe<Topic_App_Aggregated_Fields>;
};

export type Topic_App_Aggregated_Count = {
  __typename?: 'topic_app_aggregated_count';
  app_id?: Maybe<Scalars['Int']>;
  app_topic_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

export type Topic_App_Aggregated_Fields = {
  __typename?: 'topic_app_aggregated_fields';
  app_id?: Maybe<Scalars['Float']>;
  app_topic_order?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

export type Topic_App_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Topic_App_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Topic_App_Filter>>>;
  app_id?: InputMaybe<App_Filter>;
  app_topic_order?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  topic_id?: InputMaybe<Topic_Filter>;
};

export type Topic_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Topic_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Topic_Filter>>>;
  app?: InputMaybe<Topic_App_Filter>;
  app_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type GetBlogListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Blog_Filter>;
}>;


export type GetBlogListQuery = { __typename?: 'query_root', blog: Array<{ __typename?: 'blog', id?: string | null, title?: string | null, content?: string | null }> };

export type GetBlogByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogByIdQuery = { __typename?: 'query_root', blog_by_id?: { __typename?: 'blog', id?: string | null, title?: string | null, content?: string | null } | null };
