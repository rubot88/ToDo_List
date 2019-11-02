import React from 'react';
import './ToDoListItem.css'

const ToDoListItem = (props) => {
    const { label, onDeleted, onDoneClick, onImportantClick, done, important } = props;
    let classNames = "todo-list-item";
    if (done) classNames += ' done';
    if (important) classNames += " important";
    return (
        <span className={classNames}>
            <span className="todo-list-item-label"
                onClick={onDoneClick}>
                {label}
            </span>
            <button type="button"
                onClick={onImportantClick}
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
}

export default ToDoListItem;