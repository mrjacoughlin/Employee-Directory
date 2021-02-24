import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Col, Row } from "react-bootstrap";
import { Component } from "react";

export default class App extends Component {
  state = {
    people: [],
    search: "",
  };
  componentDidMount() {
    console.log("mounted!");
    const data = fetch("https://randomuser.me/api/?results=50");
    data
      .then((response) => response.json())
      .then((response) => {
        this.setState({ people: response.results });
      });
  }
  componentWillUnmount() {
    console.log("I will Unmount");
  }
}
