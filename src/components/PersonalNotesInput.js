import React from "react";


class PersonalNotesInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
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

export default PersonalNotesInput

