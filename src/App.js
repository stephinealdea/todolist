import React, { useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";

function App() {
  // setting a value for the add and close button text change
  const [showTodo, setShowTodo] = useState (false);

  // Initial list of todo items
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo 1',
      description: 'This is a todo 1',
      status: false
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'This is a todo 2',
      status: true
    }
]);

// I add 2 since the last id above was 2, 
// expected that the new todo will have an id of 3
// this is a temporary icrements for the id since there was no Database
const [idCount, setIdCount] = useState(2); 

// Add todo function
function addTodo(todo) {
  const id = idCount + 1;
  const newTodo = {id, ...todo};
  setTodos([...todos, newTodo]);
  setIdCount(id);
}

// Changes status, checked or not via id
function changeStatus(id) {
  setTodos(
    todos.map(
      (todo) => todo.id === id ? {...todo, status:!todo.status} : todo
    )
  )
}

  return (
    <>
      <div className="page-wrapper">
        {/* passing a props to toggle the button text and sets the toggle value either true or false */}
        <Header onToggleTodo={() => setShowTodo(!showTodo)} toggleText={showTodo} />
        <div className="inner-container">
          {/* added a condition to show and hide the form */}
          <div className={"show-form " + (showTodo === true ? "active": "")}>
            <AddTodo onAdd={addTodo}/>
          </div>
           <TodoLists theTodos={todos} todoChecked={changeStatus}/>
        </div>
      </div>
    </>
  );
}

export default App;
