import React, { Component } from "react";
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    }
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id),
                newArr = [...todoData];
            newArr.splice(idx, 1);
            return {
                todoData: newArr
            }
        })
    };
    render() {
        const { todoData } = this.state;
        return (
            <div className="todo-app ">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todos={todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }
}