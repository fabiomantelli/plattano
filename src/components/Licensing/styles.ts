import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 1.33rem;
        font-weight: normal;
        color: ${props => props.theme.colors.text};
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.text};
    }

    h3 {
        font-weight: normal;
        color: ${props => props.theme.colors.primary};
    }
`
