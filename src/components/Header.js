import React from 'react'

import Container from '../helpers/Container'

import headerImg from '../assets/header.png'

function Header() {
    return (
        <Container>
            <img src={headerImg} alt="headerImg"></img>
        </Container>
    )
}

export default Header
