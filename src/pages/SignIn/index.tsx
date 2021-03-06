import React from 'react'
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form } from '@unform/web'


const signup: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)

  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
            Voltar para Logon
          </a>
      </Content>
      <Background />
    </Container>
  )
};

export default signup
