import React, { Fragment, useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);

        //console.log(newTodos)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);

        //console.log(removeArr)
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })

        setTodos(updatedTodo);
    }


    return (
        <Fragment>
            <h1>Choses à faire Aujourd'hui</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </Fragment>
    )
}
