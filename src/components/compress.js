import React from 'react'
import { css } from "@emotion/core"

export default function convert() {
    return (
        <div className={"toolBox"}>
           <div className="uploadFile">
                <label htmlFor="file" className={"uploadFile"}>
                    Uplaod File
                </label>
                <input id="file" className={"insertFile"} type="file"/>
            </div>
            
            <label htmlFor="precent" className={"select"}>
            reduce by 
                <input type="number" id="precent" className={"insertFile"} css={css`
                    border : 1px solid #ccc;
                    visibility : visible;
                    width : 50px;
                    border : none;
                    background : transparent;
                    color : #969696;
                `}  placeholder={"70"}/>
                %
            </label>
            

            <div className="submit-btn">Convert</div>
        </div>
    )
}
