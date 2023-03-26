import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

function Signup({setUsers}) {

    const[username,SetUsername] = useState('')
    const[email,SetEmail] =useState('')
    const[password,SetPassword] = useState('')
    const users = []
    const navigate = useNavigate()

    const signupData = {
        "username":username,
        "email":email,
        "password":password
    }

    function handleSubmit(e){
        e.preventDefault()
        users.push(signupData)
        setUsers(users)
        navigate("/")
    }

    return(
        <div>
         <form className="card container mt-5"  onSubmit={(e)=>handleSubmit(e)}>
          <h4 className="card-header">New User</h4>
          <label htmlFor="name">Username: </label>
          <input type="text" name="name"  onChange={(e) =>SetUsername(e.target.value)}/>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"  onChange={(e)=>SetEmail(e.target.value)}/>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" onChange={(e)=>SetPassword(e.target.value)} />
          <input type="submit" value="Create User" />
         </form>
        </div>
    )
}

export default Signup;