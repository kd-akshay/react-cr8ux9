import React, { Component } from "react";

export default class SuccessComponent extends Component {

  render() {
    return (
      <div className="mySuccessContainer">
        <p className="headerText">Congratulations!! </p>
        <hr />
       
        <p className="detailText">your data has been saved successfully.</p>
       
      </div>
    );
  }
}
