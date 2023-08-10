import React from 'react'
import "./post.css"
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {AuthContext} from '../../context/authContext'

const Post = () => {
  const [titulo,setTitulo] = useState('')
  const [img,setImg] = useState('')
  const [conteudo,setConteudo] = useState('')
  const [tag,setTag] = useState('')
  const [erroform,setErroForm] = useState('')

 const enviarPost = (e)=>  {
   e.preventDeafault();
 }
 return (
    <div className='criar_poste'>
      <h2>Criar Post</h2>
      <p className='p'>Crie seus post e compartilhe seus melhores momentos</p>
      <form onSubmit={enviarPost}>
        <label>
          <span className='titulo'>Titulo</span>
        <input type='text' required placeholder='Digite um titulo' onChange={(e) => setTitulo(e.target.value)}  value = {titulo} name = 'titulo' />
        </label>
        <label>
          <span className='imagem'>coloque uma URL de imagem</span>
        <input type='text' required placeholder='coloque uma imagem de sua preferencia' onChange={(e) => setImg(e.target.value)}  value = {img}  name ='img' />
        </label>


        <label>
          <span className='conteudo'>Conteudo do post</span>
        <textarea  onChange={(e) => setConteudo(e.target.value)}  value = {conteudo} name = 'conteudo'>

        </textarea>

        </label>
        <label>
          <span className='tag'>Tags</span>
        <input type='text' required placeholder='Digite um titulo' onChange={(e) => setTag(e.target.value)}  value = {tag} name = 'tag' width='100px' height='100px' />
        </label>
        <div className='areaBotao'>
        <button className='botao'  >Cadastrar</button>
        {
          /*
          {!loading &&  <button className='botao'  >Cadastrar</button>}

          {loading &&  <button className='botao' disabled >Aguarde</button>}
           {erro && <p className='error'>{erroform}</p>}
           */
        }
           </div>
      </form>
    </div>
  )
}

export default Post