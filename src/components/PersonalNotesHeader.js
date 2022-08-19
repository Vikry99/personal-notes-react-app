import React from "react";

class PersonalNotedHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: null,
        }
    }

    render(){
        return(
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                <input placeholder="Cari Catatan"></input>
                </div>           
            </div>
        )
    }

    
}

export default PersonalNotedHeader