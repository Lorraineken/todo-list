import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TodoPage from './TodoPage';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';


function App() {
  
  const [users,setUsers] =useState([])
  const [todo,setTodo] =useState([])
  const  [update, setUpdate] = useState()

  
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
      element ={<TodoPage users ={users} todo ={todo}  update ={update}/>}
      />
      <Route 
       path = "/addtodo"
       element = {<AddTodo setTodo ={setTodo}/>}
      />
      <Route
       path = "/updatetodo"
       element = {<UpdateTodo setUpdate ={setUpdate}/>}
      />
     </Routes>
    </div>
  );
}

export default App;
