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
          <NotesActive
            notes={isActive}
            onDelete={onDelete}
            onArchive={onArchive}
          />
      ) : (
        <NotesEmpty />
      )}
      {isArchive.length !== 0 ? (
        <NotesArchive notes={isArchive} onDelete={onDelete} onMove={onArchive} />
      ) : (
        <NotesEmpty isArchive={isArchive} isActive={isActive} />
      )}
    </>
  );
}

export default PersonalNotesList;
