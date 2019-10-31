import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoListItem label="Drink Coffee" />
      </li>
      <li>
        <ToDoListItem label="Build App" important />
      </li>
    </ul>
  );
};

export default ToDoList;
