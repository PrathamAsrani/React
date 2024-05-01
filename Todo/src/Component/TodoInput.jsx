import React, {useState} from 'react'

const TodoInput = () => {
    const [input, set_input] = useState('')
    const [display, set_display] = useState('')

    const handleChange = (event) => {
        set_input(event.target.value);
    }

    const handleSubmit = () => {
        set_display(input);
    }
  return (
    <div>
        <input id='input_todo' type="text" 
            value={input}
            onChange={handleChange}
            placeholder='Enter todo'/>
        <button onClick={handleSubmit}>Add</button>
        <div>{display}</div>
    </div>
  )
}

export default TodoInput