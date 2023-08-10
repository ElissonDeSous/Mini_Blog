import './App.css';
import {BrowserRouter , Routes,Route,Navigate, NavLink} from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth';
import { useState,useEffect } from 'react';

import { useAuthentication } from './hooks/UseAuthentication';

// context

import { AuthProvider } from "./context/authContext";

import Home from './paginas/home/home'
import About from './paginas/about/about'
import Login from './paginas/login/login'
import Register from './paginas/register/register'
import Perfil from "./paginas/perfil/perfil"
import Post from "./paginas/post/post"

import Topo from './componentes/navbar/nav'
import Footer from './componentes/footer/footer';
function App() {

  const [user,setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined


  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        setUser(user)
      })
  },[auth])

  if(loadingUser)
  {
    return <p>carregando...</p>
  }
  return (
    <div className="App">
     
       <  AuthProvider  value = {{user}}>
       <BrowserRouter>
       <div className='container'>
       <Topo/>
         <Routes>
          <Route
           path='/' element = {<Home/>}
          />

          <Route
           path='/About' element = {<About/>} 
           />

          <Route path='/Login' 
          element = {!user ? <Login/> : <Navigate to='/' /> }/>

          <Route path='/Register'
           element = {!user ? <Register/> : <Navigate to = "/" />} 
           />
           
          <Route path='perfil'
           element = {user ? <Perfil/>: <Navigate to = "/login" />} 
           />

          <Route path='post'
           element = {user ? <Post/>: <Navigate to = "/login" /> }
            />
         </Routes>
         </div>
         <Footer/>
       </BrowserRouter>
       </AuthProvider>
       
    </div>
  );
}

export default App;
