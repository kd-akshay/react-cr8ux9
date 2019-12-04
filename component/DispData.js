import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class DispData extends Component {
  constructor(){

    
  }

  checkValidationNumber(ele) {
    if (
      (ele.keyCode >= 48 && ele.keyCode <= 57) ||
      ele.keyCode == 8 ||
      (ele.keyCode >= 96 && ele.keyCode <= 105)
    ) {
      return true;
    } else {
      ele.preventDefault();
    }
  }
  checkValidationAlpha(ele) {
    if (
      (ele.keyCode >= 65 && ele.keyCode <= 90) ||
      ele.keyCode == 8 ||
      ele.keyCode == 32
    ) {
      return true;
    } else {
      ele.preventDefault();
    }
  }

  onBlurValidationAlpha(ele) {
    // console.log(ele.target.value)
    let regex=/^[a-z A-Z]*$/;
    let str=ele.target.value;
    if (!regex.test(str)) {
      this.setState({isNameValid:false})
    } else{
      this.setState({isNameValid:true})

    }
  }
  checkValidationEmail(ele) {
    if (
      (ele.keyCode >= 65 && ele.keyCode <= 90) ||
      (ele.keyCode >= 48 && ele.keyCode <= 57) ||
      ele.keyCode == 39 ||
      ele.keyCode == 8 ||
      ele.keyCode == 189 ||
      ele.keyCode == 190 ||
      (ele.keyCode >= 96 && ele.keyCode <= 105)
    ) {
      return true;
    } else {
      ele.preventDefault();
    }
  }
  onBlurValidationEmail(ele) {
    // console.log(ele.target.value)
    //let regex = /^[a-zA-Z_\-0-9]+@[a-zA-Z0-9].{2,}+\.[A-Za-z]+$/;
    let regex = /^[a-zA-Z0-9.\_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i;
    let str=ele.target.value;
    if (!regex.test(str)) {
      this.setState({isEmailValid:false})
    } else{
      this.setState({isEmailValid:true})

    }
  }
  render(props) {
    if (this.props.isEditable) {
      return (
        <tr>
          <td>
            <input
              type="number"
              value={this.props.id}
              onKeyDown={this.checkValidationNumber.bind(this)}
              onChange={this.props.idChange.bind(this, this.props.index)}
            />
          </td>

          <td>
            <input
              type="text"
              className="form-control"
              value={this.props.name}
              onKeyDown={this.checkValidationAlpha.bind(this)}
              onChange={this.props.nameChange.bind(this, this.props.index)}
              onBlur={this.onBlurValidationAlpha.bind(this)}
            />
            <br/>
            {this.props.isNameValid?'':<label className='errorText'>name you are trying to enter is not valid</label>}
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={this.props.email}
              onKeyDown={this.checkValidationEmail.bind(this)}
              onChange={this.props.emailChange.bind(this, this.props.index)}
              onBlur={this.onBlurValidationEmail.bind(this)}
            />
            <br/>
            {this.props.isEmailValid?'':<label className='errorText'>email you are trying to enter is not valid is not valid</label>}
          </td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => this.props.makeNonEditable()}
            >
              Save
            </button>{" "}
            &nbsp;&nbsp;{" "}
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteEle()}
            >
              Delete
            </button>{" "}
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
            <button
              className="btn btn-primary"
              onClick={() => this.props.makeEditable()}
            >
              Edit
            </button>{" "}
            &nbsp;&nbsp;{" "}
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteEle()}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
  }
}
