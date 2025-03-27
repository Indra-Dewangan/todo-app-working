import { useState } from "react"
export function Todolist({todo ,settodo ,edited}) {
      

    const edittodo = (todoid) => {
       settodo((currenttodos) => currenttodos.map((todo) =>  
           todo.id === todoid ? {...todo,title : edited} : todo ))
      }
   

    const deletetodo = (id) => {
        settodo((currenttodos) => 
          currenttodos.filter((todo) => todo.id !==  id) 
           
        )
          
       }

    const togglecompletion = (id) => {
        settodo((currenttodos) => 
          currenttodos.map((todo) => 
            todo.id === id ? { ...todo, Completed : !todo.Completed  } : todo
          )
          
        );
      };
    return(
        <>
         {todo.map((todo) => {
        return <ul>
          <li key={todo.id} complete={todo.complete}> 
            <label><input checked={todo.Completed} onChange={() => togglecompletion(todo.id)} type='checkbox'/> {todo.title} {todo.complete}</label>
          <button onClick={() => deletetodo(todo.id)} 
          style={{color:"red"}} > Delete</button>
           <button onClick={() => edittodo(todo.id,todo.title)} 
          style={{color:"green"}} > Edit Todo</button>
           
           </li>
       </ul> 
          })}
        </>
    )
}