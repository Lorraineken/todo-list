import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from './Login';

function App() {
  return (
    <div>
     <Routes>
     <Route
         path ="/"
         element={<Login />}
        />
     </Routes>
    </div>
  );
}

export default App;
