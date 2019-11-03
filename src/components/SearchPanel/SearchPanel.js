import React from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
    const searchText = 'Type here to search',
        { onChange, onBlur, value } = props;

    return <input type="text"
        className="form-control search-input"
        placeholder={searchText}
        onChange={onChange}
        onBlur={onBlur}
        value={value} />
};

export default SearchPanel;