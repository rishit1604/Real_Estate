import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Profile from './pages/Profile';
import About from './pages/About';
import SignOut from './pages/SignOut';

export default function App(){
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-out" element={<SignOut/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
    </BrowserRouter>
  );
}