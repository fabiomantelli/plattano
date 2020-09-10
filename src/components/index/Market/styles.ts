import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    margin-top: 2vh;
    margin-bottom: 2vh;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        text-align-last: center;
    }

    h3 {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
        padding: 8vw;

        br {
            display: none;
        }
    }
`
