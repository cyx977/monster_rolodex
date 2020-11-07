import React, { Component } from "react";

import { CardList } from "./components/cardList/cardlist.component.jsx";
import { SearchBox } from "./components/searchBox/searchBox.component.jsx";

import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const result = fetch("https://jsonplaceholder.typicode.com/users");
    result.then((r) => r.json()).then((r) => this.setState({ monsters: r }));
  }

  handleChanges = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rollodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChanges}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
  
}
