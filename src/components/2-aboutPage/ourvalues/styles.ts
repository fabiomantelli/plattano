import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
    }
`
