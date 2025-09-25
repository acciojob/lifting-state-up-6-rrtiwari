import React from "react";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(function(todo) {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            {todo.completed === false ? (
              <button onClick={function() { props.handleComplete(todo.id); }}>
                Complete
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;










