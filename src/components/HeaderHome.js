import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../helpers/Container'

import headerImg from '../assets/headerHome.png'
import buttonInscrevase from '../assets/buttonInscrevase.png'


const HeaderHome = () => {
        return(
            <Container>
                <img src={headerImg} alt="headerImg" />
                <Link to="/inscricao">
                    <img
                        className="buttonInscrevase"
                        src={buttonInscrevase}
                        alt="buttonInscrevase" />
                </Link>
            </Container>
        )
}

export default HeaderHome
