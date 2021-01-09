import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    // Parse all the card options
    let className = "card";
    className += (props.color ? " card-" + props.color : "");
    className += (props.outline ? " card-outline" : "");

    this.state = {
      className: className
    };
  }

  render() {
    return (
      <div className={this.state.className}>
        <div className="card-header">
          <h3 className="card-title">{this.props.title}</h3>
        </div>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
