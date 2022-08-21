import React from "react";
import Header from "./Header";

class PersonalNotedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    };
  }

  render() {
    return <Header />;
  }
}

export default PersonalNotedHeader;
