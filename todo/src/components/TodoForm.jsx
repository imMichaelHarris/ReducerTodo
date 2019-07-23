import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState();

  const handleChange = e => {
    setItem(e.target.value);
  };

  const addItem = () => dispatch({type: "ADD_TODO", payload: item})
  return (
    <form>
      <legend>Add Todo Item</legend>
      <input autoComplete="off" onChange={handleChange} value={item} />
      <button >Add</button>
    </form>
  );
};

export default TodoForm;
