import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    line-height: 1.5rem;

    h1 {
        font-size: 1.33rem;
        margin: 15px 0;
    }

    span {
        font-size: 0.88rem;
        font-weight: 300;
    }

    h3 {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
    }

    @media only screen and (max-width: 600px) {
        align-items: center;
        text-align: center;
    }
`
