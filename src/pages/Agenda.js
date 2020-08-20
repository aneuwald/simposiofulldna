import React from 'react'

import Container from '../helpers/Container'
import agendaImg from '../assets/agenda.png'

import HeaderHome from '../components/HeaderHome';
import FooterHome from '../components/FooterHome';

import Main from '../components/Main'

function Schedule() {
    return (
        <>
            <HeaderHome />
            <Main>
                <Container>
                    <img src={agendaImg} alt="agendaImg"></img>
                </Container>
            </Main>
            <FooterHome />
        </>
    )
}

export default Schedule
