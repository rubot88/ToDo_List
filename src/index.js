import React from "react";
import { render } from "react-dom";
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';
import AppHeader from './components/AppHeader';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
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
