import React from "react";

function ListPersonalNotes(){
    return(
        <>
    <h2 className="title-main">Catatan Aktif</h2>
    <div className="notes-list">
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">Babel</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsikan</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default ListPersonalNotes