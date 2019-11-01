import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ todos }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={id}
                className="list-group-item"
            ><ToDoListItem {...itemProps} /></li>
        )
    })
    return (
        <ul className="list-group">
            {elements}
        </ul>
    );
};

export default ToDoList;