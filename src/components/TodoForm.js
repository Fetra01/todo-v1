import React, { useState } from 'react';

export default function TodoForm({onSubmit}) {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput("");
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="text"
                value={input}
                className="todo-input"
                placeholder="Ajouter à la list"
                onChange={handleChange}          
            />
            <button className="todo-button">Ajouter</button>
        </form>
    )
}
