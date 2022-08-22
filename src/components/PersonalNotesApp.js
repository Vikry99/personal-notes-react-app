import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import PersonalNotedHeader from "./PersonalNotesHeader";
import PersonalNotesInput from "./PersonalNotesInput";
import PersonalNotesList from "./PersonalNotesList";

class PersonalNotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onAddPersonalNotes = this.onAddPersonalNotes.bind(this);
    this.onDeletePersonalNotes = this.onDeletePersonalNotes.bind(this);
  }

  onAddPersonalNotes({ title, body }) {
    console.log(showFormattedDate(new Date()));
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeletePersonalNotes(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }



  render() {
    return (
      <>
        <PersonalNotedHeader />
        <div className="note-app__body">
          <PersonalNotesInput addNotes={this.onAddPersonalNotes} />
          <PersonalNotesList
            notes={this.state.notes}
            onDelete={this.onDeletePersonalNotes}
          />
        </div>
      </>
    );
  }
}

export default PersonalNotesApp;
