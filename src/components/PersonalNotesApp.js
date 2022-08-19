import React from "react";
import { getInitialData } from "../utils";
import HeaderPersonalNoted from "./HeaderPersonalNotes";
import InputPersonalNotesApp from "./InputPersonalNotesApp";
import ListPersonalNotes from "./ListPersonalNotes";

class PersonalNotesApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData()
        }
    }

    render(){
        return(
            <>
            <HeaderPersonalNoted/>
            <div className="note-app__body">
                <InputPersonalNotesApp/>
                <ListPersonalNotes/>
            </div>
            </>
        )
    }
}

export default PersonalNotesApp