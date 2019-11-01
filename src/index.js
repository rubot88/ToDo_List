import React from "react";
import { render } from "react-dom";
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';
import AppHeader from './components/AppHeader';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false }
  ]
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </div>
  );
}

render(<App />, document.getElementById("root"));
