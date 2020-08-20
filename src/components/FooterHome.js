import React from 'react'

import Container from '../helpers/Container'

import footerImg from '../assets/footerHome.png'
import SocialBtns from './SocialBtns'

function FooterHome() {
    return (
        <Container>
            <img src={footerImg} alt="footerImg" />
            <SocialBtns home='home' />
        </Container>
    )
}

export default FooterHome
