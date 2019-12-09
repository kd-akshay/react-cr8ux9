import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class DispData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNameValid: true,
      isEmailValid: true,
      isIdValid: true
    };
  }

  onBlurValidationNumber(ele) {
    let regex = /^[0-9 ]+$/i;
    let str = ele.target.value;
    if (str.match(regex)) {
      this.setState({
        isIdValid: true
      });
    } else {
      this.setState({
        isIdValid: false
      });
    }
  }

  onBlurValidationAlpha(ele) {
    let regex = /^[A-Z ]+$/i;
    let str = ele.target.value;
    if (str.match(regex)) {
      this.setState({ isNameValid: true });
    } else {
      this.setState({ isNameValid: false });
    }
  }

  onBlurValidationEmail(ele) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let str = ele.target.value;
    if (str.match(regex)) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  }
  ChangeValidityNumber() {
    this.setState({ isIdValid: true });
    //console.log(this.state.isIdValid)
  }
  ChangeValidityAlpha() {
    this.setState({ isNameValid: true });
  }
  ChangeValidityEmail() {
    this.setState({ isEmailValid: true });
  }
  render(props) {
    if (this.props.isEditable) {
      return (
        <tr>
          <td>
            <input
              type="text"
              value={this.props.id}
              onKeyDown={this.ChangeValidityNumber.bind(this)}
              onBlur={this.onBlurValidationNumber.bind(this)}
              onChange={this.props.idChange.bind(this, this.props.index)}
            />
            <br />
            {this.state.isIdValid ? (
              this.props.isIdValid ? (
                ""
              ) : (
                <span className="warning">&#9888;</span>
              )
            ) : (
              <label className="errorText">
                ID you are trying to enter is not valid
              </label>
            )}
          </td>

          <td>
            <input
              type="text"
              className="form-control"
              value={this.props.name}
              onKeyDown={this.ChangeValidityAlpha.bind(this)}
              onChange={this.props.nameChange.bind(this, this.props.index)}
              onBlur={this.onBlurValidationAlpha.bind(this)}
            />
            <br />
            {this.state.isNameValid ? (
              this.props.isNameValid ? (
                ""
              ) : (
                <span className="warning">&#9888;</span>
              )
            ) : (
              <label className="errorText">
                name you are trying to enter is not valid
              </label>
            )}
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={this.props.email}
              onKeyDown={this.ChangeValidityEmail.bind(this)}
              onChange={this.props.emailChange.bind(this, this.props.index)}
              onBlur={this.onBlurValidationEmail.bind(this)}
            />
            <br />
            {this.state.isEmailValid ? (
              this.props.isEmailValid ? (
                ""
              ) : (
                <span className="warning">&#9888;</span>
              )
            ) : (
              <label className="errorText">
                email you are trying to enter is not valid is not valid
              </label>
            )}
          </td>
          <td>
            <button onClick={() => this.props.makeNonEditable()}>Save</button>{" "}
            &nbsp;&nbsp;{" "}
            <button onClick={() => this.props.deleteEle()}>Delete</button>{" "}
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.email}</td>
          <td>
            <button onClick={() => this.props.makeEditable()}>Edit</button>{" "}
            &nbsp;&nbsp;{" "}
            <button onClick={() => this.props.deleteEle()}>Delete</button>
          </td>
        </tr>
      );
    }
  }
}
