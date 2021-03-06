import React from "react"
import { css } from "@emotion/core"
import {  Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <div 
        css={css`
            position : relative;
            height : auto;
            width : auto;
            background : transparent;
            display : flex;
            align-items : center;
            flex-direction : column;
            text-align : center;
            padding : 10px 0;
          `}>

          <h2><span className={"theme"}>B</span>log</h2>
          {/* <p>Latest</p> */}
          
          <div className="blogList">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  key={node.id} 
                >
                <div className={"blogCard"}>
                <h3
                    css={css`
                      margin-bottom: ${rhythm(1 / 4)};
                      color : #3f3f3f;
                    `}
                  >
                    {node.frontmatter.title}{" "}
                    <span
                      css={css`
                        color: #999;
                        font-size : 18px;
                      `}
                    >
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <p  css={css`
                        color: #666;
                        font-style : italic;
                      `}
                      >{node.excerpt}</p>
                </div>
              </Link>
              
            ))}
          </div>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`