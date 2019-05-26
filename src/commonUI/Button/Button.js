import React, { Component } from "react";
import "./Button.scss";
class Button extends Component {
  //handle click event by parent callback
  clicked() {
    if (this.props.onClick) this.props.onClick();
  }
  render() {
    return (
      <button
        type={this.props.submit}
        onClick={() => this.clicked()}
        className={
          "button " +
          (this.props.type ? this.props.type : "btn-ok ") +
          (this.props.className ? " " + this.props.className : "")
        }
        disabled={this.props.disabled ? this.props.disabled : false}
      >
        {this.props.icon && <i className={this.props.icon} />}
        {this.props.display}
      </button>
    );
  }
}

export default Button;
