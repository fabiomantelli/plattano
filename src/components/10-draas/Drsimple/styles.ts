import styled from 'styled-components'

export const Container = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-image: url('/assets/10-draas/dr-image.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        font-size: 2em;
        font-weight: 400;
        color: ${props => props.theme.colors.background};
        width: 45%;
    }

    @media only screen and (max-width: 61.98em) {
        background-image: none;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            width: auto;
            font-size: 1.8rem;
            line-height: 2.5rem;
            color: ${props => props.theme.colors.text};
        }
    }
`
