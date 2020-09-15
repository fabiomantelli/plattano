import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-end;
    padding-bottom: 1rem;
    margin-right: 5vw;

    h1 {
        font-size: 0.77rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }
`
