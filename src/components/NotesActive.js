import React from "react";
import { showFormattedDate } from "../utils";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NotesActive({ isActive, onDelete }) {
  return (
    <>
      <h2 className="title-main">Catatan Aktif</h2>
      <div className="notes-list">
        {isActive.map((item, id) => (
          <div className="note-item" key={id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{item.title}</h3>
              <p className="note-item__date">
                {showFormattedDate(item.createdAt)}
              </p>
              <p className="note-item__body">{item.body}</p>
            </div>
            <div className="note-item__action">
              <DeleteButton id={id} onDelete={onDelete} />
              <ArchiveButton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesActive;
