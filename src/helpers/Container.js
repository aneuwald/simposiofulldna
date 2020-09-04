import styled from 'styled-components'

const Container = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    
    img {
        width: 100%;
        max-width: var(--maxWidth);
        margin: 0 auto;
        object-fit: contain;
        height:100%;
    }

    img.buttonInscrevase {
        width: 20%;
        height: auto;
        position: absolute;
        cursor: pointer;
        bottom: 9%;
        left: 5.5%;
    }

    h1 {
        display: block;
        position: absolute;
        top: 75%;
        left: 5.5%;
        color: rgb(242, 174, 78);
        font-size: clamp(1px, 2.7vw, 21px);
        text-shadow: 3px 3px 3px #0C2D40;
    }

`

export default Container