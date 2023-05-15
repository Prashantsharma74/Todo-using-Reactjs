import React, { useState } from 'react'

function ListItem({ todo, deleteTodo, editTodo }) {

  const { title, description } = todo.text

  const [show, setShow] = useState(false)

  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className='btn' onClick={() => setShow(!show)}>i</button>
      {
        show && <span>
          <button className='btn' onClick={() => editTodo(todo)}><i class="bi bi-pencil"></i></button>

          <button className='btn' onClick={handleClick}><i class="bi bi-x"></i></button>
          <div>
            {/* Popup Div  */}

            {popup ?
              <div className="popup-box">
                <h3>Delete this task?</h3>
                <div className="btns">
                  <a href="#" className="delbtn1" onClick={() => deleteTodo(todo.id)}>Yes</a>
                  <a href="#" className="delbtn2" >No</a>
                </div>
              </div> : ""}
          </div>
        </span>
      }
    </li>
  )
}

export default ListItem

// onClick={() => deleteTodo(todo.id)}