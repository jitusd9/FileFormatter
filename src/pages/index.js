import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import photo from "../assets/ubuntu-1.jpg"

export default function Home({ data }) {
  return (
    <Layout>

      <div css={css`
        position : absolute;
        z-index : -1;
        height : 80vh;
        width : calc(100% - ${rhythm(2)});
        background : #fac4c4;
        animation: colorful 4s infinite alternate;
      `}>
      {/* just empty for the background  */}
      </div>

      <div
       css={css`
        height : 80vh;
        width : 100%;
        position : relative;
       `}>
       

          <div class="heroText">
            We are <span css={css`font-weight : bold; color : #fc7400; font-size : 60px`}>FileFormatter</span> <br/>
            <p>We</p>
            <strong>
              <div class="innerText">
                Compress<br /> 
                Convert<br />
                Edit<br />
                For Free  </div>
              </strong>

            <p>Your</p>
            {/* <span css={css`font-size : 40px;`}> File Image Video </span>. */}
            <strong>
              <div class="innerText2">
                For Free<br /> 
                Image<br />
                Video<br />
                File</div>
              </strong>
            </div>

            <div 
            css={css`
              width : 100%;
              height: 300px;
              display: flex;
              align-items : center;
              justify-content: center;
            `}>
              <Link  to={"/services/"}>
              <h2
              css={css`
                color : #fff;
                padding : 10px;
                border : 1px solid #fff;
                border-left-width : 5px;
                border-right-width : 5px;
                box-shadow : 0 10px 10px rgba(0,0,0,0.3);
              `}>Get Started</h2>
              </Link>
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
          excerpt
        }
      }
    }
  }
`