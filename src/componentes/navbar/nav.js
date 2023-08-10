import './nav.css'
import {NavLink} from 'react-router-dom'
import {useAuthentication} from "../../hooks/UseAuthentication"
 import {useAuthValue} from "../../context/authContext"
function Topo () {
    const {user} = useAuthValue()
    const {logout} = useAuthentication()
    return(
        <div className="header">
        <NavLink to = "/">
           <p>Mini<span className='titulo'>BLOG</span></p>
        </NavLink>

        <ul>
            <li>
                <NavLink className= "Linke" to="/">Home</NavLink>
            </li>
           
           {
              !user && (
                <>
                <li>
                <NavLink className='Linke' to="/Login">Login</NavLink>
            </li>
            <li>
                <NavLink className='Linke' to="/register">Registrar</NavLink>
            </li>
               </>
              )}
              {
                user &&(
                    <>
                        <li>
                <NavLink className='Linke' to="perfil">Usuario</NavLink>
            </li>
            <li>
                <NavLink className='Linke' to="/post">Criar Post</NavLink>
            </li>
               </>
                   
          )}
          <li>
                <NavLink className='Linke' to="/About">Sobre</NavLink>
            </li>

           <li>
             {user && (
                <li>
                    <button className='Linke' onClick={logout} >Sair</button>
                </li>
             )}
           </li>

           
        </ul>
        </div>
    )
}
export default Topo;