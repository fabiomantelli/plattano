import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        font-size: 4rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.background};
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 61.98em) {
        text-align: center;
        padding: 8vw;

        h2 {
            padding-top: 1rem;
        }
    }
`
