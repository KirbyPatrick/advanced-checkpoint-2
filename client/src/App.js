import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";

const test1 = [
  {
      "_id": "5c16b902e7179a2e2709b1cc",
      "year": 2005, 
      "make": "Honda",
      "model": "Accord"
  },
  {
    "_id": "asdf",
    "year": 2018,
    "make": "Ford",
    "model": "F150"
}
]

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div>
          Client
        </div>
        <ListOfUsers vehicles={test1}/>
      </div>
    );
  }
}
export default (App);


