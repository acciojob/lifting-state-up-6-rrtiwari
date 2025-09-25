
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Master Lifting State Up", completed: false }
  ]);

  const markComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo App</h2>
      <TodoList todos={todos} onComplete={markComplete} />
    </div>
  );
}

export default App;















