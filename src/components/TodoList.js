import React from 'react'

const TodoList = ({todos, setTodos, handleComplete}) => {
  return (
    <div>
        <h1>Child Component</h1>
        <ul>
            {todos.map((item, index) => {
                return <li>{item.text}{!item.isCompleted && <button onClick={() => {
                    handleComplete(index)
                }}>Complete</button>}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoList
