import React, { useState } from 'react'
import "../App.css";
const Todo = () => {
  const [tasks,setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleOnchange = (e) => {
    const taskInput = e.target.value;
    setInputValue(taskInput);
  }
  const handleSubmit = (e)  => {
    e.preventDefault();
    setTask([...tasks, inputValue]);
    setInputValue('');
  }
  return (
    <div className='todo-container'>
      <h1>Todo Application</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter task' onChange={handleOnchange} value={inputValue} />
        <button>Create Task</button>
      </form>
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>
      })}

    </div>
  )
}

export default Todo
