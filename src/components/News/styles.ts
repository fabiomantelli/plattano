import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 20vh;
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
`
