import { Container, Content, Form } from './styles'
import logo from '../../assets/logo.svg'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { TxtButton } from '../../Components/TxtButton'

import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function SignUp() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isAdm = 0

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos para prosseguir!')
    }

    api.post('users', { name, email, password, isAdm })
    .then(() => alert('Usuário cadastrado com sucesso!'), BackToLogin())
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('erro ao tentar o cadastro')
      }
    })
  }

  function BackToLogin() {
    navigate(-1)
  }

  return (
    <Container>

      <Content>
        <div>
          <img src={logo} alt="logo empresa" />
          <h1>food explorer</h1>
        </div>

        <Form>
          <h1>Crie sua conta</h1>

          <FormInput title='Nome' placeholder='Exemplo: João Maria da Silva' type='text' onChange={event => setName(event.target.value)}/>
          <FormInput title='Email' placeholder='Exemplo: exemplo@email.com.br' type='email' onChange={event => setEmail(event.target.value)}/>
          <FormInput title='Senha' placeholder='No mínimo 6 caracteres' type='password' onChange={event => setPassword(event.target.value)}/>

          <Button loading={false} title='Criar Conta' onClick={handleSignUp}/>

          <TxtButton title='Já tenho uma conta' onClick={BackToLogin}/>
        </Form>


      </Content>
      
    </Container>
  )
}