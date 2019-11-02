import React, { Component } from 'react';
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);

    };

    render() {
        const { label, important = false } = this.props,
            style = {
                color: important ? 'red' : 'black'
            }
        return (
            <span className="todo-list-item">
                <span className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick.bind(this)}>
                    {label}
                </span>
                <button type="button"
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