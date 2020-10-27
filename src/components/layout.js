import React from "react"
import { css } from "@emotion/core"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {

  const data = useStaticQuery(
    graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
    `
  )

  return (
    <div
      css={css`
        position : relative;
        margin: 0 auto;
        max-width: 100%;
      `}
    >
     
      <div className={"navbar"}>
 
      <Link to={`/`} className={"brand"}>
        <h3 
          css={css`
            display: inline-block;
            font-style: normal;
            font-size : 1.5rem;
            margin : 0;
            padding : 0 ${rhythm(1)};
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
        </Link>

       
        
        <div className={"menu"}
        css={css`
            float: right;
            display : flex;
            justify-content : space-between;
            padding : 0 ${rhythm(1)};
          `}>
          <Link to={`/services/`} > Services </Link>
          <Link to={`/blog/`} > Blog </Link>
          <Link to={`/about/`} > About </Link>
          <Link to={`#`}> LogIn </Link>
        </div>
      </div>

      {/* <p css={css`
        position :absolute;
        white-space : pre;
        writing-mode : vertical-rl;
        transform : rotate(180deg);
        cursor : default;
        letter-spacing : 1px;
        font-weight : bold;
        font-size: 14px;
        opacity : 0.4;
        line-height : 0;
        top : 45vh;
        left: 10px;
      `}>{data.site.siteMetadata.title}</p> */}
      
      <div css={css`
          padding : ${rhythm(1)};
      `}>
        {children}
      </div>

      <div
        css={css`
          height : auto;
          padding : 0 ${rhythm(1)};
          width : 100%;
          display : flex;
          align-items : center;
          justify-content : space-between;
        `}>

        <div
          css={css`
            display: inline-block;
            font-style: normal;
            display : flex;
            flex-direction: column;
          `}
        > 
          <h3>Yes! We are Social <span css={css` font-size : 0.6em; color : #999; `}>follow us</span> </h3>

          <div>
            <Link to="/">Facebook 🤓</Link>
            <Link to="/">Twitter 🐤</Link>
            <Link to="/">Instagram 😎</Link>
          </div>
        </div>

        <div 
          css={css`
            position : relative;
          `}
          className={"brand"}
        >
        <h3
          css={css`
            right : 0;
            display: inline-block;
            font-size: 30px;
            color : #8f8f8f;
            text-style : normal;
          `}
        >
 
          {data.site.siteMetadata.title}
        
        </h3>
        </div> 

      </div>
      {/* <p css={css`text-align: center;`}>Copyright © 2020</p> */}
    </div>
  )
}
