import React, { useState } from 'react'
import Notask from './Notask'
import UlData from './UlData'

function ListGroup({ todos, deleteTodo, editTodo }) {

  return (

    <div className="list-group todo-storage">
      <div className="list-groups">
        {
          todos.length ? <UlData todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} /> : <Notask />
        }
      </div>
    </div>
  )
}

export default ListGroup