import {useState, useEffect} from 'react'

import { Container, Content, Form } from './styles'
import logo from '../../assets/logo.svg'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/authContext'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { TxtButton } from '../../Components/TxtButton'

export function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth() 

  function handleSignIn(){
    if(!email || !password){
      return alert('Preencha todos os campos para prosseguir!')
    }

    signIn({ email, password })
  }

  function handleRegister() {
    navigate(`/register`)
  }

  return (
    <Container>

      <Content>
        <div>
          <img src={logo} alt="logo empresa" />
          <h1>food explorer</h1>
        </div>

        <Form>
          <h1>Faça Login</h1>

          <FormInput title='Email' placeholder='Exemplo: exemplo@email.com.br' type='email' onChange={event => setEmail(event.target.value)}/>
          <FormInput title='Senha' placeholder='No mínimo 6 caracteres' type='password' onChange={event => setPassword(event.target.value)}/>

          <Button loading={false} title='Entrar' onClick={handleSignIn}/>

          <TxtButton title='Criar conta' onClick={handleRegister}/>
        </Form>


      </Content>
      
    </Container>
  )
}


