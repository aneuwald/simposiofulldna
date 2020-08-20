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

`

export default Container