import React, { useState } from 'react';
const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const onChange = (e) => {
        setTodo(e.target.value)
    }

    const addTodo = () => {
        if (todo == "") {
            alert('Please Enter Details')
        }
        else {
            setTodos([...todos, todo])
            setTodo('')
        }

    }
    const remove = (todo) => {
        setTodos(todos.filter((currentTodo) => {
            return currentTodo != todo
        }))
    }
    return (
        <div>
            <h1>Todos</h1>
            <input type="text" name="todo" value={todo} onChange={onChange} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {
                    todos.map((todo, index) => {
                        return <li key={index}>{todo} <button onClick={() => remove(todo)}>Remove</button></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todos;