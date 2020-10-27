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

            <select name="format" className={"select"}>
                <option value="none">choose Format</option>
                <option value="1">.jpg</option>
                <option value="2">.png</option>
                <option value="3">.mp3</option>
            </select>

            <div className="submit-btn">Convert</div>
        </div>
    )
}
