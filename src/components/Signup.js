import React from "react"


function Signup() {

    return(
        <div>
         <form className="card container mt-5" >
          <h4 className="card-header">New User</h4>
          <label htmlFor="name">Username: </label>
          <input type="text" name="name"  />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"  />
          <label htmlFor="password">Password: </label>
          <input type="text" name="password"   />
          <input type="submit" value="Create User" />
         </form>
        </div>
    )
}

export default Signup;