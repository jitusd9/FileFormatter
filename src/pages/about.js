import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <div 
        css={css`
            display: inline-block;
            height : 70vh;
            width : auto;
            background : #fff;
            display : flex;
            align-items : center;
            padding : 10px auto;
            flex-direction : column;
            text-align : center;
          `}>

          <h2><span className={"theme"}>A</span>bout </h2>
          <p> <strong>FileFormatter</strong> is a handy web based tool for your basic requirements with the files and images etc. you can compress them here to your desired size and covert them in any format availabe.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`