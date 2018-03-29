import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as mat from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <mat.Navbar brand="Arcade Warrior" right>
          <mat.NavItem href='#'>Getting started</mat.NavItem>
          <mat.NavItem href='#'>Components</mat.NavItem>
        </mat.Navbar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
