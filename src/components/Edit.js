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
                <option value="none">Add Filter</option>
                <option value="1">ASCII</option>
                <option value="2">emoji</option>
                <option value="3">illustration</option>
            </select>

            <div className="submit-btn">Filter</div>
        </div>
    )
}
