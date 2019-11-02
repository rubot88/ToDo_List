import React, { Component } from 'react';
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
    state = {
        done: false,
        important: false
    }
    onLabelClick = () => {
        this.setState(({ done }) => ({ done: !done }));
    };
    onMarkImportant = () => {
        this.setState(({ important }) => ({ important: !important }));
    }

    render() {
        const { label } = this.props,
            { done, important } = this.state;
        let classNames = "todo-list-item";
        if (done) classNames += ' done';
        if (important) classNames += " important";
        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    onClick={this.onLabelClick.bind(this)}>
                    {label}
                </span>
                <button type="button"
                    onClick={this.onMarkImportant}
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}