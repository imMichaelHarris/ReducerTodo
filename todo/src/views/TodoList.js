import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Todo from '../components/Todo'
import TodoForm from "../components/TodoForm";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
        <header>
        <TodoForm dispatch={dispatch} />
        <button>Clear Completed</button>
        </header>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}
    </div>
  );
};

export default TodoList;
