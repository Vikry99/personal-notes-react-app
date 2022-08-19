import React from "react";
import { getInitialData } from "../utils";
import PersonalNotedHeader from "./PersonalNotesHeader";
import PersonalNotesInput from "./PersonalNotesInput";
import PersonalNotesList from "./PersonalNotesList";

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
            <PersonalNotedHeader/>
            <div className="note-app__body">
                <PersonalNotesInput/>
                <PersonalNotesList/>
            </div>
            </>
        )
    }
}

export default PersonalNotesApp