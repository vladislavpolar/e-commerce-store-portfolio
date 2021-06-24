import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')


  const handleSubmit = event => {
    event.preventDefault()

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input
    // })

    setInput('')

  }

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <div>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add a todo"
          className="todo-input"
          name="text"
          value={input}
        />
        <button className="todo-btn">Add</button>
      </form>
    </div>
  )
}

export default TodoForm
