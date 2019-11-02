import React from 'react';
import ToDoListItem from '../ToDoLIstItem/ToDoListItem';
import './ToDoList.css'

const ToDoList = ({ todos, onDeleted }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={id}
                className="list-group-item">
                <ToDoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)} />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;