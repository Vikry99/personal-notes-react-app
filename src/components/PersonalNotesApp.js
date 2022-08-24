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
    this.onArchivePersonalNotes = this.onArchivePersonalNotes.bind(this);
    this.onSearchPersonalNotes = this.onSearchPersonalNotes.bind(this);
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
    // console.log(searchTitle.target.value)
    if(searchTitle.target.value.length >= 3 ){
      this.setState((prev) => {
        return {
          notes: prev.notes.filter((note) => note.title.toLowerCase().startsWith(searchTitle.target.value.toLowerCase()))
        }
      })
      // const result = this.state.notes.filter((note) => {
      //   return (
      //     console.log(note.title.toLowerCase().startsWith(searchTitle.target.value.toLowerCase()))
          
      //     )
       
      //   });
      //   console.log(result)
      //  this.setState(result)
    } else {
      this.setState(() => ({
        notes: this.state.notes
      }))
    }
    // this.setState((prev) => {
    //   return {
    //     // notes: prev.notes.filter((note) => note.title.toLowerCase() === searchTitle.target.value.toLowerCase()  ? note.title : note) 
    //     notes : prev.notes.filter((note) => note.title.toLowerCase().includes(searchTitle.target.value.toLowerCase()))
    // }
    // })
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
