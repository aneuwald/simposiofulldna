import React from 'react'

import styled from 'styled-components'

const SocialBtns = ({ home }) => (
    <Container home={home}>
        <div onClick={() => window.open('https://www.facebook.com/fulldna/')}></div>
        <div onClick={() => window.open('https://www.youtube.com/channel/UCwuXhPS9OW7BCfaW6N8h6cQ/featured')}></div>
        <div onClick={() => window.open('https://www.instagram.com/fulldna_oficial/')}></div>
    </Container>
)

export default SocialBtns

const Container = styled.div`
    position: absolute;
    border: 1px solid transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;


    left: ${({ home }) => home ? '59.5%' : '34.2%'};
    top: ${({ home }) => home ? '44.4%' : '77.8%'};
    height: ${({ home }) => home ? '12%' : '6%'};
    width: 15.3%;

    div {
        height: 100%;
        width: 20%;
        border: 1px solid transparent;
        border-radius: 50px;
        cursor: pointer;
    }
`