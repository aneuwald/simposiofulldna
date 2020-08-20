import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import ButtonLink from '../components/ButtonLink'

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Container = styled.div`
    text-align: center;
    font-size: 1em; 
    padding: 10px 5% 35px;  
    

`
function Success() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                        <h2>Parabéns, sua inscrição foi realizada com sucesso!</h2>
                        <h3>Em breve entraremos em contato para mais informações.</h3>
                        <h5>Enquanto isso, confira nossa agenda para ficar por dentro da programação.</h5>
                        <ButtonLink as={Link} to="/">
                            VOLTAR À AGENDA
                        </ButtonLink>
                </Container>
            </Main>
            <Footer />
        </>

    )
}

export default Success
