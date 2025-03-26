import { useState } from 'react';
import  './styles.css';


function App() {

  const [input , setinput] = useState("");
  const [todos , settodos] = useState([]);

  const inputhandler = (e) => {
    setinput(e.target.value);
    
  }


  const togglecompletion = (id) => {
    settodos((currenttodos) => 
      currenttodos.map((todo) => 
        todo.id === id ? { ...todo, Completed : !todo.Completed  } : todo
      )
      
    );
  };
  
  

  const submithandler = (e) => {
    e.preventDefault();
    settodos((currenttodos) =>{ return[...currenttodos,
      {id : crypto.randomUUID() ,title : input, 
        Completed : false }]})
        setinput("");
        if(todos.title === "") return



        console.log(todos.title)

  }

   const deletetodo = (id) => {
    settodos((currenttodos) => 
      currenttodos.filter((todo) => todo.id !==  id) 
       
    )
      
   }

   const edittodo = (todoid) => {
    
     
      settodos((currenttodos) => currenttodos.map((todo) =>  
        todo.id === todoid ? {...todo,title : input} : todo ))
   }
  
  
  console.log(todos);
   
  return(
   <>
    <form onSubmit={submithandler}>
     
      <label htmlFor="todo">Enter your ToDos :</label>
      <input value={input} onChange={inputhandler} type='text' placeholder='Enter todo' id='todo'></input>
      <button  type='submit' >Submit</button>
    </form>
    
      <h1 style={{font:"icon" , fontSize:"40px"}}>Todo List:</h1>
      {todos.map((todo) => {
        return <ul>
          <li key={todo.id} complete={todo.complete}> 
            <label><input checked={todo.Completed} onChange={() => togglecompletion(todo.id)} type='checkbox'/> {todo.title} {todo.complete}</label>
          <button onClick={() => deletetodo(todo.id)} 
          style={{color:"red"}} > Delete</button>
           <button onClick={() => edittodo(todo.id)} 
          style={{color:"green"}} > Edit Todo</button>
           
           </li>
       </ul> 
          })}
      
    </>
  )
}
export default App ;