import React from "react";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";

function NotesArchive({ isArchive, onDelete }) {
  return (
    <>
      <h2 className="title-main">Arsip</h2>
      <div className="notes-list">
        {isArchive.map((item, id) => (
          <div className="note-item" key={id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{item.title}</h3>
              <p className="note-item__date">{item.createdAt}</p>
              <p className="note-item__body">{item.body}</p>
            </div>
            <div className="note-item__action">
              <DeleteButton id={id} onDelete={onDelete} />
              <MoveButton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesArchive;
