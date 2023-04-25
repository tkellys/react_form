//pasta componente sempre começa com leta maiuscula
import React, { useState } from 'react'
import { LabelForm } from './LabelForm'
import InputForm from './inputForm'

export const UserForm = () => {
  const[nome, setNome] = useState('joao');
  const[email, setEmail] = useState();
  const[senha, setSenha] = useState();

//preventDefault é para a pagina nao recarregar automaticamente na chamada do botao ele funciona junto com o event
  const submitForm = (event) =>{
    event.preventDefault()
    console.log('submit', nome, email, senha) 
  }

  return (
<div className='container'>
    <h2>~ Cadastro de Usuário ~</h2>
    <form className='form' onSubmit={submitForm}>
       <div className="col-md-4 mb-3">
        <LabelForm name='Nome'/>
        {/* <InputForm name='nome' id='nome'/> */}
        <input 
        type="text" 
        name="nome" 
        id="nome" 
        className="form-control"
        onChange={event => setNome(event.target.value)}
        value={nome}
        />
        </div> 

        <div className="col-md-4 mb-3">
        <LabelForm name='Email'/>
        {/* <label htmlFor='email' className="form-label">Email</label> */}
        <input
         type="text" 
         name="email" 
         id="email" 
         className="form-control"
         onChange={event => setEmail(event.target.value)}
         value={email}
         />
        </div>

        <div className="col-md-4 mb-3">
        <LabelForm name='Senha'/>
        {/* <label htmlFor='senha' className="form-label">Senha</label> */}
        <input 
        type="password"
        name="senha"
        id="senha"
        className="form-control"
        onChange={event => setSenha(event.target.value)}
        value={senha} 

        />
        <br/>
        </div>
        <button type='submit' className='btn btn-success me-md-2'>Enviar</button>
    </form>
    </div>
  )
}
