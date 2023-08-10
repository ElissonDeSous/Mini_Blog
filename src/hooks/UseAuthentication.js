import {db} from "../firebase/config"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (dados) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      const { User } = await createUserWithEmailAndPassword(
        auth,
        dados.Email,
        dados.Senha
      );

      await updateProfile(User, {
        displayName: dados.displayName,
      });

      return User;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      setError(systemErrorMessage);
      setLoading(false)
    }

    setLoading(false);
  };

  const logout = () => {
   checkIfIsCancelled()
    signOut(auth)
  }

  // login 
  const Login = async (dados) => 
  {
    checkIfIsCancelled()
    setLoading(true)
    setError(false)

    try{
      await signInWithEmailAndPassword(
        auth,
        dados.Email,
        dados.Senha
        )


    }catch(error){

      let   systemErrorMessage;
       if(error.message.includes("user-not-found"))
       {
          systemErrorMessage = "Usuario nao encontrado"
       } else if (error.message.includes("wrong-password"))
       {
          systemErrorMessage = "senha nao encontrada"
       }else{
        systemErrorMessage = "ocorreu algum erro, tente acessar o sistema mais tarde"
       }

       setError(systemErrorMessage)
       setLoading(false)
      
    }
  }

    useEffect(()=>{
        return() => setCancelled(true)
    },[])
    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        Login,

    }
}
