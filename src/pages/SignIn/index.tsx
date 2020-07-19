import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles'
import Input from '../../components/input'
import Button from '../../components/button'


const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="logo da GoBarber" />

        <form>

          <h1>Faça seu logon</h1>

          <Input name="mail" type="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>

        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  </>
);

export default SignIn
