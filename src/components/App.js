import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TodoPage from './TodoPage';


function App() {
  return (
    <div>
     <Routes>
     <Route
         path ="/"
         element={<Login />}
        />
      <Route 
         path = "/signup"
         element={<Signup/>}
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
