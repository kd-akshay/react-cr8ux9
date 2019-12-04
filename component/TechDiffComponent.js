import React, { Component } from "react";

export default class TechDiffComponent extends Component {
  render() {
    return (
      <div className="myContainer">
        <p className="headerText">OOPS! SOMETHING WENT WRONG</p>
        <hr />
        <p className="subHeaderText">
          your data did not arrived due to some tecnical issue
        </p>
        <p className="detailText">Please try again later </p>
        <p className="detailText">or</p>
        <p className="detailText">call us at X-XXXX-XXX-XXXX</p>
      </div>
    );
  }
}
