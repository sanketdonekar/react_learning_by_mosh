import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;
    return (
        <ul className="list-group">
            {items.map(item => <li key={item[valueProperty]} onClick={() => onItemSelect(item)} className={item === selectedItem ? "list-group-item active" : "list-group-item"}>{item[textProperty]}</li>)}
        </ul>
    );
}
//to simplify the interface of the listGroup, we pass some default props to it
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;