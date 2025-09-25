import React from "react";

function TodoList({ todos, completeTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;












