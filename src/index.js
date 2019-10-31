import React from "react";
import { render } from "react-dom";

const TODoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Buold Awesomw App</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1> My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TODoList />
    </div>
  );
};

render(<App />, document.getElementById("root"));
