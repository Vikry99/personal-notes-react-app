import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";

function NotesArchive({ notes, onDelete, onMove }) {
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
              <DeleteButton id={item.id} onDelete={onDelete} />
              <MoveButton id={item.id} onMove={onMove} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesArchive;
