import React from "react";

const TodoList = (props) => {
  const task = props.task;
  const settask = props.settask;
  const handleComplete = (id) => {
    const updatedtask = task.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    settask(updatedtask);
  };

  return (
    <div>
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            {item.title}
            {!item.completed && (
              <button onClick={() => handleComplete(item.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
