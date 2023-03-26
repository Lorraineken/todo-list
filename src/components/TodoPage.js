import React from "react";
import { useNavigate } from "react-router-dom";

function TodoPage({users,todo}){

    const navigate = useNavigate()
    const created = []
    const started = []
    const completed = []
    const cancelled = []


    const displayuser = users.map((detail) =>{
        return (
            <ul key={`${detail.username}${detail.index}`}>
              <li>{detail.username}</li>
              <li>{detail.email}</li>
            </ul>
        )
    })

    const sample_todos = [
        {
        'title':"Laundry",
        'description':" Wash clothes, beddings and curtains",
        'status':"CREATED",
        'priority':"MEDIUM"
        },
        {'title':"Cook",
        'description':" Prepare lunch and dinner for 2",
        'status':"STARTED",
        'priority':"HIGH"},
        {'title':"Make my hair",
        'description':"Wash my hair,straighten, braid",
        'status':"COMPLETED",
        'priority':"LOW"}
    ]

    todo.map((item) => {
        sample_todos.push(item)
    })
    

    sample_todos.map((item) => 
    {
        if (item.status === 'CREATED') {
            created.push(item)
        }
        else if(item.status === 'STARTED'){
            started.push(item)
        }
        else if (item.status === 'COMPLETED'){
            completed.push(item)
        }
        else if (item.status === 'CANCELLED'){
            cancelled.push(item)
        }

        
    })

    const created_todos = created.map((item => {
        return(
            <div className="mt-3, container"  key={`${item.index}${item.description}`}>
                <div>  
             <li> {item.title} </li>
            <p>{item.description}</p>   
             
            <button className="btn btn-dark">Update</button>
             <button className="btn btn-danger ms-2" >x</button> 
                </div>
             
            </div>
            )
    }))

    const started_todos = started.map((item => {
        return(
            <div className="mt-3, container"  key={`${item.index}${item.description}`}>
                <div>  
             <li> {item.title} </li>
            <p>{item.description}</p>   
             
            <button className="btn btn-dark">Update</button>
             <button className="btn btn-danger ms-2" >x</button> 
                </div>
             
            </div>
            )
    }))

    const completed_todos = completed.map((item => {
        return(
            <div className="mt-3, container"  key={`${item.index}${item.description}`}>
                <div>  
             <li> {item.title} </li>
            <p>{item.description}</p>   
             
            <button className="btn btn-dark">Update</button>
             <button className="btn btn-danger ms-2" >x</button> 
                </div>
             
            </div>
            )
    }))

    const cancelled_todos = cancelled.map((item => {
        return(
            <div className="mt-3, container"  key={`${item.index}${item.description}`}>
                <div>  
             <li> {item.title} </li>
            <p>{item.description}</p>   
             
            <button className="btn btn-dark">Update</button>
             <button className="btn btn-danger ms-2" >x</button> 
                </div>
             
            </div>
            )
    }))

    return(
        <div>
          {displayuser}
         <button onClick={() => navigate('/addtodo')}>Add Todo</button>
         <h2 className="ms-4">TODO LIST</h2>
           <div className="row">
            <div className="card col">
              <h4>CREATED</h4>
                {created_todos}
            </div>
            <div className="card col">
              <h4>STARTED</h4>
                {started_todos}
            </div>
            <div className="card col">
              <h4>COMPLETED</h4>
                {completed_todos}
            </div>
            <div className="card col">
              <h4>CANCELLED</h4>
                {cancelled_todos}
            </div>
           </div>
          
        </div>
    ) 
}

export default TodoPage;