import Markdoc from '@markdoc/markdoc'
import React from 'react'

import { Callout } from '@/components/Callout'
import { Fence } from '@/components/Fence'
import { LinkGrid } from '@/components/LinkGrid'
import { GET_BLOG_BY_ID } from '@/gql'
import { GetBlogByIdQuery, GetBlogByIdQueryVariables } from '@/graphql'

import client from '../apollo'
import nodes from '../markdoc/nodes'
import tags from '../markdoc/tags'
interface HomeProps {
  blog: GetBlogByIdQuery['blog_by_id']
}

export default function Help({ blog }: HomeProps) {
  if (!blog?.content) return <div>loading</div>
  const ast = Markdoc.parse(blog.content) || []
  // @ts-ignore
  const content = Markdoc.transform(ast, {
    nodes,
    tags,
  })
  const html = Markdoc.renderers.react(content, React, {
    components: {
      Fence,
      LinkGrid,
      Callout,
    },
  })
  return html
  // return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

export const getStaticProps = async () => {
  const blog = (
    await client.query<GetBlogByIdQuery, GetBlogByIdQueryVariables>({
      query: GET_BLOG_BY_ID,
      variables: {
        id: '1',
      },
    })
  ).data
  return {
    props: {
      blog: blog.blog_by_id,
    },
  }
}
