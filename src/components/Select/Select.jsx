import React from "react";

export const Select = (props) => {

  const handleFilter = (e) => {
    props.callback(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  };

  return (
    <select
      onChange={handleFilter}
      name={props.name}
      className={props.classNames}
    >
      {props.arrayOptions.map(op => (
        <option key={op} value={op}>{op}</option>
      ))}
    </select>
  )
}
