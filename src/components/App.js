
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Node.js", completed: false },
    { id: 3, text: "Build a Project", completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  function handleComplete(id) {
    const updatedTodos = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        updatedTodos.push({
          id: todos[i].id,
          text: todos[i].text,
          completed: true
        });
      } else {
        updatedTodos.push(todos[i]);
      }
    }

    setTodos(updatedTodos);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;


