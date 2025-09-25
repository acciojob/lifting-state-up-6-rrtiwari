import React from "react";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        let buttonElement;

        function handleClick() {
          props.handleComplete(todo.id);
        }

        if (todo.completed) {
          buttonElement = null;
        } else {
          buttonElement = (
            <button onClick={handleClick}>
              Complete
            </button>
          );
        }

        return (
          <li key={todo.id}>
            <span>
              {todo.text}
            </span>
            {buttonElement}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

