import styled from 'styled-components'

export const Container = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    background-image: url('/assets/5-partners/forbes/forbes-image.png');
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: center;

    h1 {
        font-size: 2.22rem;
        font-weight: 400;
        color: ${props => props.theme.colors.background};
        width: 45%;
    }

    @media only screen and (max-width: 61.98em) {
        h1 {
            font-size: 1.8rem;
            width: 70%;
            line-height: 2.5rem;
        }
    }
`
