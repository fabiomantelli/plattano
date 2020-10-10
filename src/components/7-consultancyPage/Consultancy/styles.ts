import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    background-image: url('/assets/7-consultancy/consultancy/consultancy-background.png');
    background-repeat: no-repeat;
    background-size: cover;

    h1 {
        font-size: 4rem;
        font-weight: 400;
        color: ${props => props.theme.colors.background};
        width: 50%;
    }

    @media only screen and (max-width: 61.98em) {
        text-align: center;

        h1 {
            font-size: 3rem;
            width: 100%;
        }
    }
`
