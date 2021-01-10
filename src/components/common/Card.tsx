import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CardTools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bsPrefix: props.bsPrefix || "card-tools",
      className: props.className || ""
    };
  }

  render() {
    return (
      <div className={this.state.className + this.state.bsPrefix}>
        {this.props.children}
      </div>
    );
  }
};

Card.Tools = CardTools;

export default Card;
