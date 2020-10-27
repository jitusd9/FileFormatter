import React from "react"
import { Link, graphql } from "gatsby"
import {css} from "@emotion/core"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
    <Link to={"/blog/"}> ⬅ Back To Blogs</Link>
      <div css={css`
            position : relative;
            height : auto;
            width : auto;
            background : #fcfcfc;
            display : flex;
            align-items : center;
            padding : 10px;
            flex-direction : column;
            text-align : center;
      `}>
        
        <h1>{post.frontmatter.title}</h1>
        <div
          css={css`
          color : #444;
          width : 80%;
          `}
         dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`