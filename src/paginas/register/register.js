import './register.css'
import {useState , useEffect} from 'react'
import { useAuthentication } from "../../hooks/UseAuthentication"
const Register =  () =>
{
    const [UserNome,setUserNome] = useState("")
    const [Email,setEmail] = useState("")
    const [Senha,setSenha] = useState("")
    const [ConfirmSenha,setConfirmSenha] = useState("")
    const [erro , setErro] = useState("") 
    
    const {createUser,error: authErro,loading} = useAuthentication();

const HandSubmit  = async (evento) =>{
    evento.preventDefault()
  setErro("")

    const User = {
        UserNome,
        Email,
        Senha,
        
    }

    if(Senha !== ConfirmSenha){
       setErro("Senhas não são iguais")
       return
    }
     const res = await createUser(User)
    console.log(res)
}
  useEffect(() => {
     if(authErro)
     {
        setErro(authErro)
     }
  },[authErro ])
    return(
        <div className='formulario'>
         <h1>Cadastrar Agora</h1>

         <h2>Crie uma conta e compartilhe sua historia</h2>
         <form onSubmit={HandSubmit} >
            <label>
                <span className='p'>Nome </span>
                <input  type='text' placeholder = "Digite seu Nome" name='Nome' required value={UserNome} onChange = {(evento)=> setUserNome(evento.target.value)} />
            </label>
            <label>
                <span className='p'>Email </span>
                <input  type='text' placeholder = "Digite seu Email" name='Email' required value={Email} onChange = {(evento)=> setEmail(evento.target.value)} />
            </label>
            <label>
                <span className='p'>Senha </span>
                <input  type='password' placeholder = "Digite uma senha" name='Senha' required value={Senha} onChange = {(evento)=> setSenha(evento.target.value)} />
            </label>
            <label>
                <span className='p'> Confirmar sua senha</span>
                <input  type='password' placeholder = "confirmar senha" name='SenhaConfirma' required value={ConfirmSenha} onChange = {(evento)=> setConfirmSenha(evento.target.value)} />
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
export default Register