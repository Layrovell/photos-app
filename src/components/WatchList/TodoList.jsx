import React from "react";

export const TodoList = ({todos, onRemove, onToggle}) => {
  if (todos.length === 0) {
    return <p className="center">пока дел нет!</p>
  }

  const removeHandler = (e, id) => {
    e.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={e => removeHandler(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};
