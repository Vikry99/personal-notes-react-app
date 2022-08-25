import React from "react";
import { showFormattedDate } from "../utils";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NotesActive({ onDelete, onArchive, notes }) {
  return (
    <>
      <div className="notes-list">
        {notes.map((item) => (
          <div className="note-item" key={item.id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{item.title}</h3>
              <p className="note-item__date">
                {showFormattedDate(item.createdAt)}
              </p>
              <p className="note-item__body">{item.body}</p>
            </div>
            <div className="note-item__action">
              <DeleteButton onDelete={onDelete} id={item.id} />
              <ArchiveButton onArchive={onArchive} id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesActive;
