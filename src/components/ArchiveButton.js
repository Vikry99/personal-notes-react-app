import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => console.log(onArchive(id))}
    >
      Arsipkan
    </button>
  );
}

export default ArchiveButton;
