import React from "react";
import FormInput from "./FormInput";
class PersonalNotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      result: {input: '', maxLength: 50, char: null}
    };

    this.onTitleInputEventHandler = this.onTitleInputEventHandler.bind(this);
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleInputEventHandler(event) {
    this.setState((prev) => {
      return {
        title: event.target.value,
        result: {
          ...prev.result,
          input: event.target.value,
          char: prev.result.maxLength - event.target.value.length
        }
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
    this.setState((prev) => {
      return {
        note: {
          title: '',
          body: ''
        },
        result: {
          ...prev.result,
          input: '',
        }
      }
    })
  }


  render() {
    return (
      <FormInput
        result={this.state.result.char}
        onSubmitEventHandler={this.onSubmitEventHandler}
        onTitleInputEventHandler={this.onTitleInputEventHandler}
        onBodyInputEventHandler={this.onBodyInputEventHandler}
      />
    );
  }
}

export default PersonalNotesInput;
