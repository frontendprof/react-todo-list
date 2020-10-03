
import React,{useState} from 'react';

function TodoForm(props) {


    const [input,setInput]=useState("");

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        // props.onSubmit({
        //     id:Math.random(),
        //     text:input
        // });

        setInput("huh");
    }





    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a todo" 
            className="todo-input" 
            name="text" 
            value={input}
            onChange={handleChange}
            />
            <button className="todo-buton">Add a todo</button>
        </form>
        
    );
}

export default TodoForm;
