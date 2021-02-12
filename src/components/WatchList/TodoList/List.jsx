import React from "react";
import {Todo} from './Todo'

export const List = (props) => {
  const todos = props.items.map((item, idx) => {
    return (
      <Todo {...props} {...item} />
    );
  });
  return (
    <ul className="todo-list">
      {todos}
    </ul>
  );
}
