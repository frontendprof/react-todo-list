
import React,{useState} from 'react';

function TodoForm() {


    const [input,setInput]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a todo" 
            className="todo-input" 
            name="text" 
            value={input}/>
            <button className="todo-buton">Add a todo</button>
        </form>
        
    );
}

export default TodoForm;
