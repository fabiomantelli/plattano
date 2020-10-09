import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
        padding-bottom: 20px;
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.text};
        padding-right: 0.5rem;
    }

    a {
        text-decoration: none;
        white-space: nowrap;
        color: ${props => props.theme.colors.primary};
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: initial;
    }

    @media only screen and (max-width: 61.98em) {
        align-items: center;
        text-align: center;
        padding: 1rem;
    }
`
