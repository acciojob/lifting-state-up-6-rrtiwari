import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [task, settask] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a React app", completed: false },
    { id: 3, title: "Deploy the React app", completed: false },
  ]);

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>

      <TodoList task={task} settask={settask} />
    </div>
  );
};

export default App;
