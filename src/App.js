import React from 'react';
import './App.css';

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h2 className="intro">Todo App</h2>
      <hr/>
      <hr/>
      
      <TodoList />
      
    </div>
  );
}

export default App;
