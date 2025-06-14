import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Profile from './pages/Profile';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';


export default function App(){
  return (
    
      <BrowserRouter>
          <Header/>
          <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            
            <Route element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/create-listing" element={<CreateListing/>}/>
            </Route>
            <Route path="/about" element={<About/>}/>
            
          </Routes>
    </BrowserRouter>
  );
}