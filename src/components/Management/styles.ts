import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-image: url('/assets/management/management-background.png');
    background-repeat: no-repeat;
    background-size: 100% auto;

    h1 {
        font-size: 3.88rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }

    h2 {
        font-size: 1.33rem;
        font-weight: normal;
        text-align-last: center;
        color: ${props => props.theme.colors.background};
    }
`
