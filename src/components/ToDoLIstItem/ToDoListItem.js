import React, { Component } from 'react';
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
    state = {
        done: false
    }
    onLabelClick = () => {
        this.setState({
            done: !this.state.done
        })
    };

    render() {
        const { label, important = false } = this.props,
            style = {
                color: important ? 'red' : 'black'
            },
            { done } = this.state;
        let classNames = "todo-list-item";
        classNames = done ? `${classNames} done` : classNames;
        return (
            <span className={classNames}>
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