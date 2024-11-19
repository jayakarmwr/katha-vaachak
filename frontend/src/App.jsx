import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Confirm from './components/Confirm';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';
import CreateStory from './components/CreateStory';
import MyStories from './components/MyStories';
import StoryHistory from './components/StoryHistory';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/confirm-email" element={<Confirm/>}/>
        <Route path="/change-password" element={<Forgot/>}/>
        <Route path="/create-story" element={<CreateStory/>}/>
        <Route path="/my-stories" element={<MyStories/>}/>
        <Route path="/story-history" element={<StoryHistory/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}
export default App
