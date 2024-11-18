import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Confirm from './components/Confirm';
import Forgot from './components/Forgot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/confirm-email/:token" element={<Confirm/>}/>
        <Route path="/change-password" element={<Forgot/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}
export default App
