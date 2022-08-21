import React from "react";

function FormInput({
  onSubmitEventHandler,
  onTitleInputEventHandler,
  onBodyInputEventHandler,
}) {
  return (
    <>
      <form className="note-input" onSubmit={onSubmitEventHandler}>
        <h2 className="title-main">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa Karakter</p>
        <input
          className="note-input__title"
          placeholder="Ini adalah judul..."
          onChange={onTitleInputEventHandler}
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatan kamu disini ..."
          onChange={onBodyInputEventHandler}
        />
        <button type="submit">Buat</button>
      </form>
    </>
  );
}

export default FormInput;
