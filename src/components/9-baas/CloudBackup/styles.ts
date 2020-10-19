import styled from 'styled-components'

export const Container = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    background-image: url('/assets/9-baas/cloudbackup.png');
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: cover;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme.colors.background};
    }

    p {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.55rem;
        font-weight: 400;
        color: ${props => props.theme.colors.background};
        width: 60%;
    }

    @media only screen and (max-width: 61.98em) {
        background-position: center;

        h1 {
            font-size: 1.8rem;
            line-height: 2.5rem;
        }

        p {
            font-size: 1.4rem;
            font-weight: 400;
            color: ${props => props.theme.colors.background};
        }
    }
`
