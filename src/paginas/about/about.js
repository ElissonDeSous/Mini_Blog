import EstiloAbout from './about.css'


import {Link} from "react-router-dom"
function About ()
{
    return(
        <div className='Container'>
           <h2>Mini Blog</h2>
           <p className='paragrafo'>esse blog serve para que as pessoas possam compartilhar sua propria historia</p>

           <Link className='sobre' to="/register">Crie sua conta</Link>
        </div>
    )
}
export default About