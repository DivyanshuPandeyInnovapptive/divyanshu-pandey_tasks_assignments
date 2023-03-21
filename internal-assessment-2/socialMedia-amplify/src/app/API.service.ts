/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreatePost: OnCreatePostSubscription;
  onUpdatePost: OnUpdatePostSubscription;
  onDeletePost: OnDeletePostSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  description: string;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: Post | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  description?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  content: string;
  postCommentsId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
  postCommentsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  postCommentsId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null;
  title?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchablePostFilterInput | null> | null;
  or?: Array<SearchablePostFilterInput | null> | null;
  not?: SearchablePostFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchablePostAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchablePostAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchablePostAggregateField {
  id = "id",
  title = "title",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchablePostConnection = {
  __typename: "SearchablePostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
  postCommentsId?: ModelIDInput | null;
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPostFilterInput | null> | null;
  or?: Array<ModelSubscriptionPostFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  content?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCommentFilterInput | null> | null;
  or?: Array<ModelSubscriptionCommentFilterInput | null> | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SearchPostsQuery = {
  __typename: "SearchablePostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      username?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    username?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    description: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  username?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async SearchPosts(
    filter?: SearchablePostFilterInput,
    sort?: Array<SearchablePostSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchablePostAggregationInput | null>
  ): Promise<SearchPostsQuery> {
    const statement = `query SearchPosts($filter: SearchablePostFilterInput, $sort: [SearchablePostSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchablePostAggregationInput]) {
        searchPosts(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchPostsQuery>response.data.searchPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            post {
              __typename
              id
              title
              description
              createdAt
              updatedAt
              username
            }
            createdAt
            updatedAt
            postCommentsId
            username
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreatePostListener(
    filter?: ModelSubscriptionPostFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  > {
    const statement = `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput, $username: String) {
        onCreatePost(filter: $filter, username: $username) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
    >;
  }

  OnUpdatePostListener(
    filter?: ModelSubscriptionPostFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  > {
    const statement = `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput, $username: String) {
        onUpdatePost(filter: $filter, username: $username) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
    >;
  }

  OnDeletePostListener(
    filter?: ModelSubscriptionPostFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  > {
    const statement = `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput, $username: String) {
        onDeletePost(filter: $filter, username: $username) {
          __typename
          id
          title
          description
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
    >;
  }

  OnCreateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > {
    const statement = `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput, $username: String) {
        onCreateComment(filter: $filter, username: $username) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
    >;
  }

  OnUpdateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > {
    const statement = `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput, $username: String) {
        onUpdateComment(filter: $filter, username: $username) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
    >;
  }

  OnDeleteCommentListener(
    filter?: ModelSubscriptionCommentFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > {
    const statement = `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput, $username: String) {
        onDeleteComment(filter: $filter, username: $username) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            description
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          postCommentsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
    >;
  }
}
