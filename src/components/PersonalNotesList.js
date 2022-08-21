import React from "react";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive";
import NotesEmpty from "./NotesEmpty";

function PersonalNotesList({ notes, onDelete }) {
  const isActive = notes.filter((item) => item.archived === false);
  const isArchive = notes.filter((item) => item.archived === true);
  return (
    <>
      {isActive.length !== 0 ? (
        <NotesActive isActive={isActive} onDelete={onDelete} />
      ) : (
        <NotesEmpty />
      )}
      {isArchive.length !== 0 ? (
        <NotesArchive isArchive={isArchive} onDelete={onDelete} />
      ) : (
        <NotesEmpty />
      )}
    </>
  );
}

export default PersonalNotesList;
