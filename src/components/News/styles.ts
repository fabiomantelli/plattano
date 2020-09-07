import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 25vh;
    justify-content: center;
    padding-left: 5vw;

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

    @media only screen and (max-width: 1024px) {
        text-align: center;
        height: 10vh;
        padding-top: 2vw;
    }

    @media only screen and (max-width: 600px) {
        height: auto;
        padding: 5vw;
    }
`
