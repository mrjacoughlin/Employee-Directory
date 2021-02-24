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
  handleInputChange = (event) => {
    const search = this.state.search;
    console.log(search);
  };
  render() {
    return (
      <div className="App">
        <h1>User Directory</h1>
        <div className="Container">
          <Row>
            <Col xs={12} md={8}>
              <input
                className=""
                type="text"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
              <button
                type="button"
                onClick={this.handleSearchClick}
                className="btn btn-success"
              >
                Search
              </button>
              <button
                type="button"
                onClick={this.handleSort}
                className="btn btn-primary"
              >
                {" "}
                Sort by Email{" "}
              </button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
