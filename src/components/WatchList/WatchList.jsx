import React from 'react';
import './WatchList.scss';
import {TodoApp} from './TodoList/TodoApp'

export const WatchList = () => {

  return (
    <section>
      <h1 className="section__title">My Watch List</h1>
        <div className="container">
          <TodoApp/>
        </div>
    </section>
  );
};
