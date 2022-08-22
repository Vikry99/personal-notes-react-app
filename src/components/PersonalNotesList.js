import React from "react";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive";
import NotesEmpty from "./NotesEmpty";

function PersonalNotesList({ notes, onDelete, onArchive }) {
  const isActive = notes.filter((item) => item.archived === false);
  const isArchive = notes.filter((item) => item.archived === true);
  return (
    <>
      {isActive.length !== 0 ? (
        notes.map((note) => (
          <NotesActive
            key={note.id}
            idx={note.id}
            {...note}
            isActive={isActive}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      ) : (
        <NotesEmpty />
      )}
      {isArchive.length !== 0 ? (
        <NotesArchive isArchive={isArchive} onDelete={onDelete} />
      ) : (
        <NotesEmpty isArchive={isArchive} isActive={isActive} />
      )}
    </>
  );
}

export default PersonalNotesList;
