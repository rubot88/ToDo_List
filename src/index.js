import React from "react";
import { render } from "react-dom";
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';
import AppHeader from './components/AppHeader';

const App = () => {
  return (
    <div>
      <span>{(new Date()).toLocaleTimeString()}</span>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
}

render(<App />, document.getElementById("root"));
