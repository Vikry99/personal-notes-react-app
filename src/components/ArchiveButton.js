import React from "react";

function ArchiveButton({id, onArhive}){
    return <button className="note-item__archive-button" onClick={() => onArhive(id)}>Arsipkan</button>
}

export default ArchiveButton