import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";



function PersonalNotesList({notes}){
    return(
        <>
    <h2 className="title-main">Catatan Aktif</h2>
    <div className="notes-list" >
    {notes.map((value, id) =>
        <div className="note-item" key={id}>
            <div className="note-item__content">
                <h3 className="note-item__title">{value.title}</h3>
                <p className="note-item__date">{value.createdAt}</p>
                <p className="note-item__body">{value.body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton/>
                <ArchiveButton/>
            </div>
        </div>
         )}
    </div>
   
    <h2 className="title-main">Arsip</h2>
    <div className="notes-list">
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">Babel</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.</p>
            </div> 
            <div className="note-item__action">
                <DeleteButton/>
                <MoveButton/>
            </div>
        </div>
    </div>
    
    </>
    )
}

export default PersonalNotesList