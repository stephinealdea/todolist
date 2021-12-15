import React from 'react'

function TodoLists({ theTodos, todoChecked }) {
    
    return (
        <div className="todo-list-container">
            {theTodos.map(
                (todo) => (
                    <div key={todo.id} className={`todo-item ${todo.status ? 'checked' : ''}`}>
                        <div className="checkbox">
                            <input type="checkbox" name="status" 
                            checked={todo.status}
                            onChange={() => todoChecked(todo.id)}/>
                        </div>
                        <div className="todo-details">
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default TodoLists
