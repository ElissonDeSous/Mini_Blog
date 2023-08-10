import './login.css'
import {useState , useEffect} from 'react'
import { useAuthentication } from "../../hooks/UseAuthentication"

function Login () {
    const [Email,setEmail] = useState("")
    const [Senha,setSenha] = useState("")
    const [erro , setErro] = useState("") 
    
    const {Login,error: authErro,loading} = useAuthentication();

const HandSubmit  = async (evento) =>{
    evento.preventDefault()
  setErro("")

    const User = {
        Email,
        Senha,
        
    }

 
     const res = await Login(User)
    console.log(res)
}
  useEffect(() => {
     if(authErro)
     {
        setErro(authErro)
     }
  },[authErro ])
    return(
        <div className='login'>
        <h1>Entrar</h1>
        <h2 className='h2'>faça o login para poder utilizar o sistema</h2>
        <form className='formu'  onSubmit={HandSubmit}>
            <label>
            <input type = "text" placeholder='digite seu email' value={Email} onChange = {(evento) => setEmail(evento.target.value)} />
            </label>
            <label>
            <input type = "password" placeholder='digite sua senha' value={Senha} onChange = {(evento)=> setSenha(evento.target.value)} />
            </label>
            <div className='areaBotao'>
          {!loading &&  <button className='botao'  >Cadastrar</button>}

          {loading &&  <button className='botao' disabled >Aguarde</button>}
           {erro && <p className='error'>{erro}</p>}
           </div>
            
        </form>
        </div>
    )
}
export default Login