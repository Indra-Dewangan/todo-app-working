import { useState } from 'react';
import  './styles.css';
import { Todoform } from '../components/todoform';
import { Todolist } from '../components/todolist';


function App() {


  const [editedtodo , setedittodo] = useState("")    
  
  const [todos , settodos] = useState([]);

     
  

  function addtodo(title) {
    settodos((currenttodos) =>{ return[...currenttodos,
      {id : crypto.randomUUID() , title , 
        Completed : false }]})
          

   }
 
  console.log(todos)

 
  
  
  

  
   

   
   
  return(
   <>
          <Todoform  editstodo={setedittodo} onSubmit={addtodo}/>
        
      <h1 style={{font:"icon" , fontSize:"40px"}}>Todo List:</h1>
          <Todolist todo={todos} settodo={settodos} editstodo={setedittodo} edited={editedtodo}/>
      
    </>
  )
}
export default App ;