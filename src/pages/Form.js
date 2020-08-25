import React, { useState } from 'react';
import styled from 'styled-components'

import axios from '../helpers/axios'

import buttonSubscribe from '../assets/buttonSubscribe.png'
import loadingGif from '../assets/loading.gif'

import Header from '../components/Header';
import Main from '../components/Main'
import Footer from '../components/Footer';

import formBackground from '../assets/formBackground.png'

const Form = props => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [profissao, setProfissao] = useState('')
  const [telefone, setTelefone] = useState('')
  const [instagram, setInstagram] = useState('')

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const handleSubmit = (e) => {

    e.preventDefault()

    if (nome.trim() === "")
      return alert('Por favor, insira o seu nome completo.')

    if (email.trim() === "")
      return alert('Por favor, insira o seu email.')

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.trim()))
      return alert('E-mail parece estar incorreto.')
    
    if (profissao.trim() === "")
      return alert('Por favor, indique a sua profissão.')

    if (telefone.trim() === "")
      return alert('Por favor, insira o seu número de WhatsAPP.')

    if (telefone.trim().length < 8)
      return alert('Número de Whatsapp parece estar incorreto.')

    setLoadingSubmit(true)

    axios.post('/inscritos.json',
      {
        nome: nome,
        email: email,
        profissao: profissao,
        telefone: telefone,
        instagram: instagram,
      })
      .then(response => {
        setNome('')
        setEmail('')
        setProfissao('')
        setTelefone('')
        setInstagram('')
        setLoadingSubmit(false)
        props.history.push('/success')
      })
      .catch(error => {
        setLoadingSubmit(false)
        console.log('Ocorreu algum erro, tente novamente')
      });
  }


  return (
    <>
      <Header />
      <Main>
        <FormContainer onSubmit={handleSubmit}>
          <input placeholder="Nome completo *" value={nome} onChange={e => setNome(e.target.value)} />
          <input placeholder="E-mail *" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Profissão *" value={profissao} onChange={e => setProfissao(e.target.value)} />
          <input placeholder="Whatsapp *" value={telefone} onChange={e => setTelefone(e.target.value)} className="smaller" />
          <input placeholder="Instagram" value={instagram} onChange={e => setInstagram(e.target.value)} className="smaller" />
          {loadingSubmit
            ? <img className="submit-loading" src={loadingGif}  alt="submitLoading"  height="30"/>
            : <input className="submit-btn" type="image" src={buttonSubscribe} alt="submitButton" height="30"></input>
          }
        </FormContainer>
      </Main>
      <Footer />
    </>
  );
}

export default Form;


const FormContainer = styled.form`
  display: flex;
  justify-content:space-evenly;
  flex-direction: column;
  margin: 0 auto;
  background-image: url(${formBackground});
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding-top: 10%;

  input {
    margin: 4px 10%;
    border-radius: 10px;
    padding: 1% 10px;
    outline: none;
    border-width: 0.5px;
    
  }

  input.smaller {
    margin: 4px 30%;
  }

  input.submit-btn,
  img.submit-loading {
    align-self: center;
    margin: 10px 10%;
  }

`