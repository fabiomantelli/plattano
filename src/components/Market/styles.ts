import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25vh;

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

        br {
            display: none;
        }
    }
`
