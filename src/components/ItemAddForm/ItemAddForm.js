import React from 'react';
import './ItemAddForm';

const ItemAddForm = ({onAddItem}) => {
    return (
        <div className="item-add-form">
        <button className="btn btn-outline-secondary float-right m-2"
                onClick={()=>onAddItem('Hello world')}>
                Add Item
        </button>
        </div>

    );
};

export default ItemAddForm;