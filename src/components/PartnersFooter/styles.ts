import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;

    h1 {
        font-size: 0.77rem;
        color: ${props => props.theme.colors.background};
    }
`
