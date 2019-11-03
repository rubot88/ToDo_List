import React, { Component } from "react";
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
    maxId = 1;
    state = {
        todoData: [
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have a lunch'),
        ],
        searchValue: '',
        filter: 'all'
    }
    // fill initial data
    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    // remove item from todo list
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

    // add item to todo list
    addItem = (text = "New Item") => {
        const newItem = this.createToDoItem(text);
        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        })
    }

    // change given property of element in array this.state.todoData
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

    // change property "done" in array this.state.todoData by given id
    noToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })
    }
    // change property "important" in array this.state.todoData by given id
    noToggleImportant = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        })
    }

    //set new state returned from SearchPanel component
    onSearchChange = (value) => {
        this.setState({
            searchValue: value
        })
    }
    // search given string in array
    search = (arr, searchValue) => {
        if (searchValue.length === 0) {
            return arr;
        }
        return arr.filter(({ label }) => label.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    }


    // filter given array by key 'filter'
    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    //set new state returned from ItemStatusFilter component
    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { todoData, searchValue, filter } = this.state,
            doneCount = todoData.reduce((sum, item) => item.done ? sum + 1 : sum, 0),
            todoCount = todoData.length - doneCount,
            listToRender = this.filter(this.search(todoData, searchValue), filter);

        return (
            <div className="todo-app ">
                <AppHeader
                    toDo={todoCount}
                    done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                        onBlurSearch={this.onBlurSearch}
                        value={searchValue}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <ToDoList
                    todos={listToRender}
                    onDeleted={this.deleteItem}
                    onImportantClick={this.noToggleImportant}
                    onDoneClick={this.noToggleDone}
                />
                <ItemAddForm onAddItem={(text) => this.addItem(text)} />
            </div>
        );
    }
}