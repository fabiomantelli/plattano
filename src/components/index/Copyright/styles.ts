import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    h1 {
        font-size: 0.77rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }
`
