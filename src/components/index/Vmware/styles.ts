import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 2rem 2rem;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
        margin-top: 10px;
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.text};
        margin-top: 10px;
    }

    h3 {
        font-weight: normal;
        color: ${props => props.theme.colors.primary};
        margin-top: 10px;
    }

    a {
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        padding: 5vw;

        br {
            display: none;
        }
    }
`
