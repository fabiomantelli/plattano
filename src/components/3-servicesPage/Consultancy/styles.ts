import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
        padding-bottom: 1rem;
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.text};
        padding-bottom: 1rem;
    }

    a {
        text-decoration: none;
        white-space: nowrap;
        color: ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 61.98em) {
        align-items: center;
        text-align: center;
        padding: 1rem;

        a {
            padding-top: 0.6rem;
        }
    }

    @media only screen and (max-width: 41.98em) {
        a {
            padding-top: 0.9rem;
        }
    }
`
