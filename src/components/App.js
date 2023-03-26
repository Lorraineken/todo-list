import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TodoPage from './TodoPage';


function App() {
  
  const [users,setUsers] =useState([])
  

  return (
    <div>
     <Routes>
     <Route
         path ="/"
         element={<Login users={users} />}
        />
      <Route 
         path = "/signup"
         element={<Signup setUsers={setUsers}/>}
      />
      <Route
      path = "/todopage"
      element ={<TodoPage users ={users} />}
      />
     </Routes>
    </div>
  );
}

export default App;
