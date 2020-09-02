import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 0.77rem;
    }

    a {
        font-size: 0.77rem;
        text-decoration: underline;
        color: ${props => props.theme.colors.background};
    }
`
