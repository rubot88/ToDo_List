import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
    state = {
        value: ''
    }
    onSearchChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
        this.props.onSearchChange(value);
    }

    onBlurSearch = () => {
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder='Type here to search'
                value={this.state.value}
                onChange={this.onSearchChange}
                onBlur={this.onBlurSearch} />
        );
    }
};

export default SearchPanel;