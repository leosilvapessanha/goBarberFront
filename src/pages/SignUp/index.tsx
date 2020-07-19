import React from 'react'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form } from '@unform/web'


const signup: React.FC = () => {
  function handleSubmited(data: object): void {
    console.log(data)

  }
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="logo da GoBarber" />

          <Form onSubmit={handleSubmited}>

            <h1>Faça seu cadastro</h1>

            <Input name="mail" type="email" icon={FiUser} placeholder="E-mail" />

            <Input name="mail" type="email" icon={FiMail} placeholder="E-mail" />

            <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>

          </Form>

          <a href="login">
            <FiArrowLeft />
            Voltar para Logon
          </a>
        </Content>


      </Container>
    </>
  )
};

export default signup
