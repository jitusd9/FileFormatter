import React, {useState} from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Convert from "../components/convert"
import Edit from "../components/Edit"
import Compress from "../components/compress"

export default function About({ data }) {

  const [tab, setTab] = useState("tab-1");

  const onTabClick = (e)=> {
    console.log(e.target.name);
    setTab(e.target.name);
  }
  return (
    <Layout>
      <div 
        css={css`
            display : inline-block;
            width : 100%;
            height : auto;
            margin : 10px auto;
            padding : 10px auto;
            display : flex;
            align-items : center;
            flex-direction : column;
            text-align : center;
          `}>

          <h2> <span className={"theme"}>S</span>ervices</h2>
          
          <div className={"container"}>
                <div className={"routeNav"}>
                 
                      <Link to={"/services#tab-1/"} name="tab-1" onClick={onTabClick}>Convert</Link>
                    
                      <Link to={"/services#tab-2/"} name="tab-2" onClick={onTabClick}>Compress</Link>
                    
                      <Link to={"/services#tab-3/"} name="tab-3" onClick={onTabClick}>Edit</Link>
                    
                </div>
                <div className={"main"}>
                {/* <p>{tab} is clicked</p> */}
                    { 
                      tab === "tab-1" ? <Convert /> :  
                      tab === "tab-2" ? <Compress /> :  
                      tab === "tab-3" ? <Edit />  : "oh"
                    
                    }
                </div> 

                {/* <div className="loading">
                  <div className="outerCircle">
                    <div className="innerCircle"></div>
                  </div>
                </div>  */}
          </div>


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