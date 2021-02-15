import React, {useState} from "react";

export const TodoForm = ({onAdd}) => {
  const [title, setTitle] = useState('');

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      onAdd(title);
      setTitle('');
    };
  };

  return (
    <div className="input-field col s6">
      <input
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        id="title"
        type="text"
        autoComplete="off"
      />
      <label htmlFor="title">Type a new Todo</label>
    </div>
  )
}
