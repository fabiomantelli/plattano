import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5vw;
    padding: 0 0 1rem 1rem;

    h1 {
        font-size: 0.77rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }
`
