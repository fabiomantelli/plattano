import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-end;
    padding-left: 5vw;
    padding-bottom: 2vh;
    margin-right: 5vw;

    h1 {
        font-size: 0.77rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }
`
