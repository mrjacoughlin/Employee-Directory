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
    this.setState({ search: event.target.value });
  };
  handleSearchClick = (event) => {
    const search = this.state.search;
    console.log(search);
    const data = fetch(`https://randomuser.me/api/?${search}`);
    data
      .then((response) => response.json())
      .then((response) => {
        this.setState({ people: response.results });
      });
  };
  handleSort = () => {
    let people = this.state.people;
    people.sort((a, b) => {
      let emailA = a.email;
      let emailB = b.email;
      if (emailA < emailB) {
        return -1;
      }
      if (emailA > emailB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      people,
    });
  };
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSearch = (event) => {
    console.log(event.target.value);
    let found = this.state.people.filter((person) => {
      if (event.target.value === person.name.first) {
        return person.name.first;
      }
    });
    this.setState({ employees: found });
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
