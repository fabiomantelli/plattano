import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: center;
    padding-left: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.background};
        padding-top: 1vh;
    }

    @media only screen and (max-width: 42.98em) {
        height: auto;
        padding: 5vh 8vw 0 8vw;
        text-align: center;
    }
`
