import React from 'react'

import Container from '../helpers/Container'

import footerImg from '../assets/footer.png'
import SocialBtns from './SocialBtns'

function Footer() {
    return (
        <Container>
            <img src={footerImg} alt="footerImg"></img>
            <SocialBtns />
        </Container>
    )
}

export default Footer
