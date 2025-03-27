import { useState } from "react";

export function Todoform({onSubmit, editstodo}) {

  
     const [input , setinput] = useState("");
     

    const inputhandler = (e) => {
        setinput(e.target.value);
      
          
        
      }
      const newtodo = (e) => {
        editstodo(e.target.value);
    
      }

      const submithandler = (e) => {
         e.preventDefault();
         if(input === "") return;
        onSubmit(input)
         setinput("")
         }
    

      

    return(

        <form onSubmit={(e) =>{
          return submithandler(e)}}>
     
      <label htmlFor="todo">Enter your ToDos :</label>

      <input value={input} onChange={inputhandler} type='text' placeholder='Enter todo' id='todo'></input>
      <input onChange={newtodo} type='text' placeholder='Enter your edited todo' ></input>
      <button  type='submit' >Submit</button>
    </form>
    
    )

}