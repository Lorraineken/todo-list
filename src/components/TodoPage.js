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

    

    return(
        <div>
         {displayuser}
         <h2>TODO LIST</h2>

        </div>
    ) 
}

export default TodoPage;