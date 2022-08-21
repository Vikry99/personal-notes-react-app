import React from "react";
import FormInput from "./FormInput";
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
      <FormInput
        onSubmitEventHandler={this.onSubmitEventHandler}
        onTitleInputEventHandler={this.onTitleInputEventHandler}
        onBodyInputEventHandler={this.onBodyInputEventHandler}
      />
    );
  }
}

export default PersonalNotesInput;
