import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/form'
import ListGroup from './components/ListGroup'


function App() {

    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState({
        todo: [],
        isEdit: false
    })

    // SaveTodo 
    const saveTodo = (text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
        }
        setTodos([...todos, newTodo])
    }

    // Delete Todo 
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // Edit Todo 
    const editTodo = (todo) => {
        setEdit({
            todo: todo,
            isEdit: true
        });
    }

    //Update Todo
    const updateTodo = (id, text) => {
        console.log(id, text)
        setTodos(todos.map(todo => todo.id === id ? { id: id, text: text } : todo));

        setEdit({
            text: "",
            isEdit: false
        })
    }

    return (
        <>
            <Navbar />
            <div className="main-section">
                <Form saveTodo={saveTodo} edit={edit} updateTodo={updateTodo} />
                <ListGroup todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
            </div>
        </>
    )
}

export default App
