import React from "react";

function TodoPage({users}){

    const displayuser = users.map((detail) =>{
        return (
            <ul key={`${detail.username}${detail.index}`}>
              <li>{detail.username}</li>
              <li>{detail.email}</li>
            </ul>
        )
    })

    const sample_todos = ["Do my laundry","Grocery shopping","make my hair","Finish code challenge"]

    const display_todos =sample_todos.map((item) => 
    {
        return(
        <div className="mt-3" key={`${item.index}${item}`}>
         <ul >
         <li> {item} </li>
        </ul>   
         
        <button className="btn btn-dark">Update</button>
         <button className="btn btn-danger ms-2" >x</button>
        </div>
        )
    })

    return(
        <div>
         {displayuser}
         <h2>TODO LIST</h2>
          {display_todos}
        </div>
    ) 
}

export default TodoPage;