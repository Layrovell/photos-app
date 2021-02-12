import React, {useState} from "react";

export const AddForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue) {
        props.onAdd(inputValue);
        setInputValue('');
      }
    }
  }
  return (
    <form>
      <input
        onKeyDown={handleKeyDown}
        onChange={e => setInputValue(e.currentTarget.value)}
        value={inputValue}
        className='todo-input'
        type='text'
        placeholder='type smth...'
      />
    </form>
  );
}
