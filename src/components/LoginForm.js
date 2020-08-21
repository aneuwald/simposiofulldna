import React, { useState } from 'react'
import axiosRegular from 'axios'
import styled from 'styled-components'

import axios from '../helpers/axios'
import loadingGif from '../assets/loading.gif'


const url = process.env.REACT_APP_LOGIN_URL

const LoginForm = ({ setInscritos }) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if (!email || !senha)
            return alert('E-mail e senha são obrigatórios')

        setIsLoading(true)

        let authData = {
            email: email,
            password: senha,
            returnSecureToken: true
        };

        axiosRegular.post(url, authData)
            .then(response => {
                axios.get(`/inscritos.json?auth=${response.data.idToken}`)
                    .then(res => {
                        setInscritos(res.data)
                    })
                    .catch(() => {
                        alert('Não foi possível fazer o login')
                        setIsLoading(false)
                    });
            })
            .catch(() => {
                alert('OCORREU ALGUM ERRO, TENTE NOVAMENTE')
                setIsLoading(false)
            });
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="E-mail"
            />
            <input
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder="Senha" />

            {isLoading ? <img className="admin-loading" src={loadingGif} alt="adminLoading" height="30" /> : <button>Entrar</button>}

        </FormContainer>
    )
}

export default LoginForm

const FormContainer = styled.form`
  display: flex;
  justify-content:space-evenly;
  flex-direction: column;
  margin: 0 auto;
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding-top: 10%;

  input {
    margin: 4px auto;
    border-radius: 10px;
    padding: 10px 10px;
    outline: none;
    border-width: 0.5px;
    width: 75%;
    max-width: 500px;
    text-align: center;
  }

  button{
    align-self: center;
    margin: 10px 10%;
    padding: 10px 40px; 
    border-radius: 50px;
    background: #0C2D40;
    font-weight: 700;
    color: white;
    outline: none;
  }

  img.admin-loading {
    align-self: center;
    margin: 10px 10%;
  }

`
