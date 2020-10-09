import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    background-image: url('/assets/3-services/profissionalServices/profissionalservices-image.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 1rem;
    }

    @media only screen and (max-width: 61.98em) {
        text-align: center;
        background-image: none;
    }
`
