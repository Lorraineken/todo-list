import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function UpdateTodo({setUpdate}){

    const [title,setTitle]=useState('')
    const [description,setDescription] =useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const new_todo = []
    const navigate = useNavigate()

    const todo_data = {
        "title":title,
        "description":description,
        "status":status,
        "priority":priority,
    }
  
    function handleSubmit(e){
        e.preventDefault() 
        new_todo.push(todo_data)
        setUpdate(new_todo)
        navigate('/todopage')
    }
    return(
       <div>
         <form className="card container mt-5" onSubmit={(e) => handleSubmit(e)} >
          <h4 className="card-header">UPDATE TODO</h4>
          <label htmlFor="title">title: </label>
          <input type="text" name="name" onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="email">description: </label>
          <input type="text" name="description"  onChange={(e) => setDescription(e.target.value)}/>
          <label htmlFor="status">status: </label>
          <input type="text" name="status"  onChange={(e) => setStatus(e.target.value)} />
          <label htmlFor="priority">priority: </label>
          <input type="text" name="priority" onChange={(e) => setPriority(e.target.value)} />
          <input type="submit" value="Update Todo" />
         </form>
       </div> 
    )
}

export default UpdateTodo