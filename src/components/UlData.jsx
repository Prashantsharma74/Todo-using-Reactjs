import React from 'react'
import ListItem from './ListItem'

function UlData({ todos, deleteTodo, editTodo }) {
    return (
        <ul>
            {
                todos.map(todo => <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />)
            }
        </ul>
    )
}

export default UlData