import React from "react";

function FormInput({
  onSubmitEventHandler,
  onTitleInputEventHandler,
  onBodyInputEventHandler,
  result
}) {
  
  return (
    <>
      <form className="note-input" onSubmit={onSubmitEventHandler}>
        <h2 className="title-main">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa Karakter: {result}</p>
        <input
          className="note-input__title"
          placeholder="Ini adalah judul..."
          onChange={onTitleInputEventHandler}
          required
          onInvalid={e => e.target.setCustomValidity('Silahkan masukan judul')} 
          maxLength={50}
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatan kamu disini ..."
          onChange={onBodyInputEventHandler}
          required
          onInvalid={e => e.target.setCustomValidity('Silahkan masukan catatan terlebih dahulu')} 
        />
        <button type="submit">Buat</button>
      </form>
    </>
  );
}

export default FormInput;
