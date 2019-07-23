import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Todo from '../components/Todo'
import TodoForm from "../components/TodoForm";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
        <TodoForm dispatch={dispatch} />
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}
    </div>
  );
};

export default TodoList;
