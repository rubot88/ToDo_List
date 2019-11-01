import React from "react";
import SearchPanel from '../SearchPanel/';
import ToDoList from '../ToDoList';
import AppHeader from '../AppHeader/';
import ItemStatusFilter from '../ItemStatusFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';


const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]
    return (
        <div className="todo-app ">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <ToDoList todos={todoData} />
        </div>
    );
}


export default App;