import React, {useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState)
    return (
        <div>
            
        </div>
    );
};

export default TodoList;