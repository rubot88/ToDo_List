import React, { Component } from "react";
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';

export default class App extends Component {
    maxId = 1;
    state = {
        todoData: [
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have a lunch'),
        ]
    }

    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
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
    addItem = (text = "New Item") => {
        const newItem = this.createToDoItem(text);
        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        })
    }
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id),
            oldItem = arr[idx],
            newItem = {
                ...oldItem,
                [propName]: !oldItem[propName],
            },
            newArr = [...arr];
        newArr.splice(idx, 1, newItem);
        return newArr

    }
    noToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })
    }

    noToggleImportant = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        })
    }
    render() {
        const { todoData } = this.state,
            doneCount = todoData.reduce((sum, item) => item.done ? sum + 1 : sum, 0),
            todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app ">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todos={todoData}
                    onDeleted={this.deleteItem}
                    onImportantClick={this.noToggleImportant}
                    onDoneClick={this.noToggleDone}
                />
                <ItemAddForm onAddItem={(text) => this.addItem(text)} />
            </div>
        );
    }
}