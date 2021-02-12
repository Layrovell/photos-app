import React, {useState} from "react";
import {AddForm} from './AddForm';
import {List} from './List';

export const TodoApp = (props) => {
  const [query, setQuery] = useState('');
  const [todos, setTodos] = useState([{
    title: 'asfdgthyj',
    id: new Date(),
    completed: false
  }]);

  const handleAddItem = (value) => {
    const newTodos = [...todos, {
      title: value,
      id: new Date(),
      completed: false
    }
    ];
    setTodos(newTodos);
  };

  const handleCompleted = (id) => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    currentTodos[index].completed = !currentTodos[index].completed;
    setTodos(currentTodos);
  };

  const handleDeleted = (id) => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex(el => el.id === id);
    setTodos(currentTodos);
  };

  const searchTodo = () => {
    const searchQuery = query.toLocaleLowerCase().trim();
    return todos
      .filter(t => t.title.toLocaleLowerCase().includes(searchQuery));
  }

  return (
    <>
      <AddForm onAdd={handleAddItem}/>
      <List
        items={searchTodo()}
        onCompleted={handleCompleted}
        onDeleted={handleDeleted}/>

      <input
        onChange={e => setQuery(e.target.value)}
        value={query}
        className='todo-input'
        type='text'
        placeholder='search...'
      />
    </>
  );
}
