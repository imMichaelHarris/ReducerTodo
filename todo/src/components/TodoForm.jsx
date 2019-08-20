import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState({
    item: "",
    dueDate: ""
  });

  const handleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const addItem = e => {
    e.preventDefault();
    const newItem = {
      item: item.item,
      completed: false,
      id: new Date(),
      // dueAt: new Date()
      dueAt: moment().format(item.dueDate)
    };
    dispatch({ type: "ADD_TODO", payload: newItem });
    // console.log(newItem);
    setItem({
      item: "",
      dueDate: ""
    });
  };
  return (
    <form onSubmit={addItem}>
      <legend>Add Todo Item</legend>
      <input
        type="text"
        name="item"
        autoComplete="off"
        onChange={handleChange}
        value={item.item}
      />
      <input
        type="date"
        name="dueDate"
        onChange={handleChange}
        value={item.dueDate}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
