import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Todo from '../components/Todo'

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
