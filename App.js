import React, { Component } from "react";
import { render } from "react-dom";
// import data2 from "./data.json";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./style.css";
import axios from "axios";
import DispData from "./component/DispData";
import TableComponent from "./component/TableComponent";
import TechDiffComponent from "./component/TechDiffComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.getdata();
  }
  getdata = async function() {
    console.clear();
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        let resArr = this.state.users;
        resArr = [...res.data];
        resArr = resArr.map(ele => {
          ele.isEditable = false;
          ele.isNameValid = true;
          ele.isEmailValid = true;
          ele.isIdValid = true;
          return ele;
        });
        this.setState({
          users: [...resArr]
        });
        window.location.href = "https://react-cr8ux9.stackblitz.io/#/data";
      })
      .catch(err => {
        console.clear();
        window.location.href = "https://react-cr8ux9.stackblitz.io/#/notFound";
      });
  };
  makeEditable = index => {
    let arr = this.state.users;
    arr[index].isEditable = true;
    this.setState({
      users: [...arr]
    });
  };

  makeNonEditable = index => {
    debugger;
    let arr = this.state.users;
    // arr[index].isIdValid &&
    //   arr[index].isEmailValid &&
    //   arr[index].isNameValid
    if (arr[index].isEmailValid) {
      arr[index].isEditable = false;
      this.setState({
        users: [...arr]
      });
    }
  };

  idChange = (index, ele) => {
    let regex = /^[0-9 ]+$/i;
    let str = ele.target.value;
    let arr = this.state.users;
    arr[index].id = ele.target.value;
    if (str.match(regex)) {
      arr[index].isIdValid = true;
    } else {
      arr[index].isIdValid = false;
    }
    this.setState({
      users: [...arr]
    });
  };
  nameChange = (index, ele) => {
    let regex = /^[A-Z ]+$/i;
    let str = ele.target.value;
    let arr = this.state.users;
    arr[index].name = ele.target.value;
    if (str.match(regex)) {
      arr[index].isNameValid = true;
    } else {
      arr[index].isNameValid = false;
    }
    this.setState({
      users: [...arr]
    });
  };
  emailChange = (index, ele) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let str = ele.target.value;
    let arr = this.state.users;
    arr[index].email = str;
    if (str.match(regex)) {
      arr[index].isEmailValid = true;
    } else {
      arr[index].isEmailValid = false;
    }
    this.setState({
      users: [...arr]
    });
  };

  deleteElement = index => {
    let arr = this.state.users;
    arr.splice(index, 1);
    this.setState({
      users: [...arr]
    });
  };
  redirect = () => {
    window.location.href = "https://react-cr8ux9.stackblitz.io/#/notFound";
  };
  printArray = () => {
    console.table(this.state.users);
  };
  render() {
    return (
      <div>
        <div>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                strict
                render={() => {
                  return <h3>Loading data</h3>;
                }}
              />
              <Route
                path="/notFound"
                exact
                strict
                renfder={() => {
                  return <TechDiffComponent />;
                }}
              />
              <Route
                path="/data"
                exact
                strict
                render={() => {
                  return (
                    <TableComponent
                      headerArray={["Id", "Name", "Email", "Action"]}
                    >
                      {this.state.users.map((ele, index) => {
                        return (
                          <DispData
                            name={ele.name}
                            email={ele.email}
                            id={ele.id}
                            index={index}
                            isEditable={ele.isEditable}
                            makeEditable={() => this.makeEditable(index)}
                            makeNonEditable={() => this.makeNonEditable(index)}
                            idChange={this.idChange}
                            nameChange={this.nameChange}
                            emailChange={this.emailChange}
                            deleteEle={() => this.deleteElement(index)}
                            isNameValid={ele.isNameValid}
                            isEmailValid={ele.isEmailValid}
                            isIdValid={ele.isIdValid}
                          />
                        );
                      })}
                    </TableComponent>
                  );
                }}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
