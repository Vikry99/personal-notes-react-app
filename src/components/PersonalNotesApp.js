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
      resultSearch: getInitialData(),
    };
    this.onAddPersonalNotes = this.onAddPersonalNotes.bind(this);
    this.onDeletePersonalNotes = this.onDeletePersonalNotes.bind(this);
    this.onArchivePersonalNotes = this.onArchivePersonalNotes.bind(this);
    this.onSearchPersonalNotes = this.onSearchPersonalNotes.bind(this);
  }

  onAddPersonalNotes({ title, body }) {
    console.log(showFormattedDate(new Date()));
    this.setState((prev) => {
      return {
        resultSearch: [
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

  onArchivePersonalNotes(id) {
    this.setState((prev) => {
      return {
        notes: prev.notes.map((note) => 
          note.id === id ? { ...note, archived : !note.archived } : note
        ),
      };
    });
  }

  onSearchPersonalNotes(searchTitle){
    this.setState((prev) => {
      return {
      resultSearch : prev.notes.filter((note) => note.title.toLowerCase().includes(searchTitle.target.value.toLowerCase()))
    }
    })
  }


  render() {
    return (
      <>
        <PersonalNotedHeader onSearch={this.onSearchPersonalNotes} />
        <div className="note-app__body">
          <PersonalNotesInput addNotes={this.onAddPersonalNotes} />
          <PersonalNotesList
            notes={this.state.resultSearch}
            onDelete={this.onDeletePersonalNotes}
            onArchive={this.onArchivePersonalNotes}
          />
        </div>
      </>
    );
  }
}

export default PersonalNotesApp;
