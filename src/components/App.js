import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TodoPage from './TodoPage';


function App() {
  
  const[username, SetUsername] = useState('')
  const[email, SetEmail] = useState('')
  const[password, SetPassword] = useState('')

  
  
  
  return (
    <div>
     <Routes>
     <Route
         path ="/"
         element={<Login SetEmail={() => SetEmail()} SetPassword = {() => SetPassword()}/>}
        />
      <Route 
         path = "/signup"
         element={<Signup />}
      />
      <Route
      path = "/todopage"
      element ={<TodoPage />}
      />
     </Routes>
    </div>
  );
}

export default App;
