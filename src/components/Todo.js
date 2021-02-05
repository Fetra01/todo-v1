import React, { useState } from 'react';

export default function Todo(todos) {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });
    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div key={todo.id}>
                {todo.text}
            </div>
        </div>
    ))
}
