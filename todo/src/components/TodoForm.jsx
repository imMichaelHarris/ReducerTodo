import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import moment from  'moment'


const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChange = e => {
    setItem(e.target.value);
  };

  const addItem = e => {
    e.preventDefault();
    const newItem = {
      item: item,
      completed: false,
      id: new Date(),
      dueAt: moment().add(2, 'days').toDate()

    };
    dispatch({ type: "ADD_TODO", payload: newItem });
    console.log(newItem)
    setItem("");
  };
  return (
    <form onSubmit={addItem}>
      <legend>Add Todo Item</legend>
      <input
        type="text"
        autoComplete="off"
        onChange={handleChange}
        value={item}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
