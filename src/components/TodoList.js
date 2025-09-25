import React from "react";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        let buttonElement;

        function handleClick() {
          props.handleComplete(todo.id);
        }

        if (todo.completed) {
          buttonElement = null;
        } else {
          buttonElement = <button onClick={handleClick}>Complete</button>;
        }

        return (
          <div key={todo.id}>
            <span>{todo.text}</span>
            {buttonElement}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
