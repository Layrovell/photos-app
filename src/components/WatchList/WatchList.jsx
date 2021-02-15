import React, {useState, useEffect} from 'react';
import './WatchList.scss';
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";
import {SearchTodo} from "./SearchTodo";

export const WatchList = () => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]');

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }

    setTodos(prev => [newTodo, ...prev])
  };

  const toggleHandler = (id) => {
    setTodos(prev => prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
    console.log('toggle')
  };

  const removeHandler = (id) => {
    const shouldRemove = window.confirm('Are you sure?');

    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  };

  const searchTodo = () => {
    const searchQuery = query.toLocaleLowerCase().trim();
    return todos
      .filter(t => t.title.toLocaleLowerCase().includes(searchQuery));
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <h2 className="py3 text-shadow">My Watch List</h2>

            <TodoForm onAdd={addHandler}/>
            <SearchTodo query={query} setQuery={setQuery}/>

            <TodoList
              todos={searchTodo()}
              onRemove={removeHandler}
              onToggle={toggleHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
