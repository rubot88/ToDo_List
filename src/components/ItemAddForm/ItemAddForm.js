import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        if (label) {
            this.props.onAddItem(label);
            this.setState({
                label: ''
            })
        }
    }
    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={this.state.label} />
                <button className="btn btn-outline-secondary btn-block">
                    Add item
            </button>
            </form>

        );
    }
};

export default ItemAddForm;