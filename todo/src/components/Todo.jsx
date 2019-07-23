import React from 'react';

const Todo = ({todo, dispatch}) => {
    const toggle = () => dispatch({type: "TOGGLE_TODO", payload: todo.id})
    return (
        <div onClick={toggle} >
            <h2>{todo.item}</h2>
        </div>
    );
};

export default Todo;