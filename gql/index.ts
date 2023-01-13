import { gql } from "@apollo/client";

export const GET_BLOG_LIST = gql`
  query GetBlogList($limit: Int, $offset: Int, $filter: blog_filter) {
    blog(limit: $limit, offset: $offset, filter: $filter) {
      id
      title
      content
    }
  }
`;
/**
 * 获取具体文章
 */
export const GET_BLOG_BY_ID = gql`
  query GetBlogById($id: ID!) {
    blog_by_id(id: $id) {
      id
      title
      content
    }
  }
`;
