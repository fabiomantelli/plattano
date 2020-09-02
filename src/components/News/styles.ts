import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }
`
