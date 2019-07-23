import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
    return (
        <form>
            <legend>Add Todo Item</legend>
            <input autoComplete="off" />
            <button>Add</button>
        </form>
    );
};

export default TodoForm;