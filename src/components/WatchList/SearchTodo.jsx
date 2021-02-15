import React from "react";

export const SearchTodo = ({query, setQuery}) => {

  return (
    <div className="input-field col s6">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        id="search"
        type="text"
        className="validate"
      />
      <label htmlFor="search">search todo...</label>
    </div>
  );
};

