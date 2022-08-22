import React from "react";

function DeleteButton(id, onDelete) {
  return (
    <button className="note-item__delete-button" onClick={() => console.log(onDelete)}>
      Delete
    </button>
  );
}

export default DeleteButton;
