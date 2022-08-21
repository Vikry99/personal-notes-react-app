import React from "react";

function Header() {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input placeholder="Cari Catatan"></input>
      </div>
    </div>
  );
}

export default Header;
