import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const[todos, setTodos] = useState([
    {
      text : "Learn React",
      isCompleted : false
    },
    {
      text : "Build a React app",
      isCompleted : false
    },
    {
      text : "Deploy the React app",
      isCompleted : false
    },
  ])


  function handleComplete(index)
  {
    let temp = [...todos]
    temp[index].isCompleted = true
    setTodos(temp)
  }
  return (
    <div>
      <h1>
        Parent Component
      </h1>
      <TodoList todos={todos} setTodos={setTodos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
