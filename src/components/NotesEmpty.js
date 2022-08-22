import React from "react";

function NotesEmpty({isActive, isArchive}) {
  
  return (
    <>
     {isActive.length === 0 ? (
      <div>
          <h2 className="title-main">Catatan Aktif</h2>
          <p className="notes-list__empty-message">Tidak ada catatan</p>
      </div>
      ) : null}

      {isArchive.length === 0 ? (
        <div>
            <h2 className="title-main">Arsip</h2>
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        </div>
      ) : null}
    </>
  )
}

export default NotesEmpty;
