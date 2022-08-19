import React from "react";
import { getInitialData } from "../utils";
import { showFormattedDate } from "../utils";

class InputPersonalNotesApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData()
        }
    }

    render(){
        return (
            <div className="note-input">
                <h2 className="title-main" >Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter</p>
                <input className="note-input__title" placeholder="Ini adalah judul..." />
                <textarea className="note-input__body" placeholder="Tuliskan catatan kamu disini ..."/>
                <button type="submit">Buat</button>
            </div>
        )
    }
}

export default InputPersonalNotesApp

