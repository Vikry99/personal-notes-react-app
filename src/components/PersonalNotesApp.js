import React from "react";
import { getInitialData } from "../utils";
import PersonalNotedHeader from "./PersonalNotesHeader";
import PersonalNotesInput from "./PersonalNotesInput";
import PersonalNotesList from "./PersonalNotesList";
import autoBind from "auto-bind";

class PersonalNotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      resultSearch: getInitialData(),
    };
    autoBind(this);
  }

  onAddPersonalNotes({ title, body }) {
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
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  onSearchPersonalNotes(searchTitle) {
    const checkTitle = searchTitle.target.value.toLowerCase();
    this.state.notes.forEach((note) => {
      if (checkTitle === note.title.toLowerCase()) {
        this.setState((prev) => {
          return {
            notes: prev.notes.filter((note) =>
              note.title
                .toLowerCase()
                .startsWith(searchTitle.target.value.toLowerCase())
            ),
          };
        });
      } else if (searchTitle.target.value.length === 0) {
        this.setState(() => ({
          notes: this.state.resultSearch,
        }));
      }
    });
  }

  render() {
    return (
      <>
        <PersonalNotedHeader onSearch={this.onSearchPersonalNotes} />
        <div className="note-app__body">
          <PersonalNotesInput addNotes={this.onAddPersonalNotes} />
          <PersonalNotesList
            notes={this.state.notes}
            onDelete={this.onDeletePersonalNotes}
            onArchive={this.onArchivePersonalNotes}
          />
        </div>
      </>
    );
  }
}

export default PersonalNotesApp;
