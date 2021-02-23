import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Col, Row } from "react-bootstrap";

export default class App extends Component {
    state ={
        people:[],
        serach:""
};