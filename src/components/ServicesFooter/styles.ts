import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.background};

    h1 {
        font-size: 0.77rem;
    }

    a {
        font-size: 0.77rem;
        text-decoration: underline;
        color: ${props => props.theme.colors.background};
    }
`
