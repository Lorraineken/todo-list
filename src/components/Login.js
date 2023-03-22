import React,{useState} from "react"
import { useNavigate } from "react-router-dom";

function Login(){

  const navigate = useNavigate()
  const[email, SetEmail] = useState('')
  const[password, SetPassword] = useState('')

  
  
  function handleSubmit(e){
    e.preventDefault()


  }
    
    return (
        <section className="vh-100">
        <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
         <form onSubmit={(e) => handleSubmit(e)}>
           <div className="form-outline mb-4">
             <input type="email"  id="form1-mail"  className="form-control form-control-lg"  onChange={(e) => SetEmail(e.target.value)} />
             <label className="form-label" htmlFor="form1-mail">Email address</label>
           </div>
           <div className="form-outline mb-4">
             <input type="password"  id="form1-pswd" className="form-control form-control-lg" onChange ={(e)=> SetPassword(e.target.value)} />
             <label className="form-label" htmlFor="form1-pswd">Password</label>
           </div>
           <div className="d-flex justify-content-around align-items-center mb-4">
           </div>
           <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
            <button className="btn btn-secondary btn-lg btn-block ms-2" onClick={() => navigate('/signup')}>Sign Up</button>
           </form>
         </div>
       </div>
       </div>
    </section>
    )
}

export default Login;
