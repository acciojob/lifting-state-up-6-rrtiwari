
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Node.js", completed: false },
    { id: 3, text: "Build a Project", completed: false }
  ]);

  function handleComplete(id) {
    // Create new array and mark clicked todo as completed
    var updatedTodos = todos.map(function(todo) {
      if (todo.id === id) {
        return { id: todo.id, text: todo.text, completed: true };
      } else {
        return todo;
      }
    });

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









