import React from 'react';

const TodoForm = () => {
    return (
        <form>
            <legend>Add Todo Item</legend>
            <input autoComplete="off" />
            <button>Add</button>
        </form>
    );
};

export default TodoForm;