import React from "react";
import { render } from "react-dom";

const ToDoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Awesome App</li>
    </ul>
  );
}

const AppHeader = () => {
  return <h1>My Todo List</h1>
}

const SearchPanel = () => {
  return <input placeholder="search" />
}
const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
}

render(<App />, document.getElementById("root"));
