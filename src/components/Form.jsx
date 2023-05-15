import React, { useEffect, useState } from 'react'

function Form({ saveTodo, edit , updateTodo }) {

  const [text, setText] = useState({
    title : "",
    description : ""
  })

  let { title , description } = text
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      // console.log(edit.todo)
      updateTodo(edit.todo.id , text)
    }else{
      saveTodo(text)
    }
   setText({
    title: "",
    description : ""
   })
  }

  useEffect(() => {
    if(edit?.isEdit){
      setText({
      title : edit.todo.text?.title,
      description : edit.todo.text?.description
    })
  }
  }, [edit])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input type="text" name="title" placeholder="Title..." onChange={handleChange} value={title} maxLength="7" required />
          <input type="text" name="description" onChange={handleChange} value={description} maxLength="12" placeholder="Input..." required />
        </div>
        <span>
          <button type="submit">+</button>
        </span>
      </form>
    </>
  )
}

export default Form