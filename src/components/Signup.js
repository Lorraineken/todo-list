import React from "react"


function Signup() {

    return(
        <div>
         <form className="card container mt-5" >
          <h4 className="card-header">New User</h4>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"  />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"  />
          <label htmlFor="education level">Education Level: </label>
          <input type="text" name="education_level"  />
          <label htmlFor="password">Password: </label>
          <input type="text" name="password"   />
          <input type="submit" value="Create User" />
         </form>
        </div>
    )
}

export default Signup;