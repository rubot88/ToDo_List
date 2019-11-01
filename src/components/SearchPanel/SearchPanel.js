import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    }
    return <input type="text"
        className="form-control search-input"
        style={searchStyle}
        placeholder={searchText} />
};

export default SearchPanel;