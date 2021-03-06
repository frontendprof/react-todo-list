
import React,{useState,useEffect,useRef} from 'react';

function TodoForm(props) {


    const [input,setInput]=useState("");


    const inputRef=useRef(null)


    useEffect(()=>{
        inputRef.current.focus()
    })







    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        props.onSubmit({
            id:Math.random(),
            text:input
        });

        setInput("");
    }





    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                  <input 
                  type="text" 
                  placeholder="Update your todo" 
                  className="todo-input edit" 
                  name="text" 
                  value={input}
                  onChange={handleChange}
                  ref={inputRef}
                  />
                  <button className="todo-button edit">Update</button>
                  </>
                  )
                  
                   :

                  ( 
                <>
                    <input 
                    type="text" 
                    placeholder="Add a todo" 
                    className="todo-input" 
                    name="text" 
                    value={input}
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button">Add a todo</button>
                </>)
                    
            }
          
        </form>
        
    );
}

export default TodoForm;
