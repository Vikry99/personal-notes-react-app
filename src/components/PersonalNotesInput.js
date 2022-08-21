import React from "react";

class PersonalNotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleInputEventHandler = this.onTitleInputEventHandler.bind(this);
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleInputEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyInputEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    console.log(this.state.notes);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="title-main">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa Karakter</p>
        <input
          className="note-input__title"
          placeholder="Ini adalah judul..."
          onChange={this.onTitleInputEventHandler}
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatan kamu disini ..."
          onChange={this.onBodyInputEventHandler}
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default PersonalNotesInput;
