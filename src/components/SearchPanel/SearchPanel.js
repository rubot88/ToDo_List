import React from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
    const searchText = 'Type here to search',
        { onChangeSearch, onBlurSearch, value } = props;

    return <input type="text"
        className="form-control search-input"
        placeholder={searchText}
        onChange={onChangeSearch}
        onBlur={onBlurSearch}
        value={value} />
};

export default SearchPanel;