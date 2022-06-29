import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 85%, 100% 100%);
    background-color: ${props => props.theme.colors.primary};

    h1 {
        font-size: 3.5rem;
        font-weight: 400;
        color: ${props => props.theme.colors.background};
    }

    h2 {
        font-weight: 300;
        line-height: 1.5rem;
        color: ${props => props.theme.colors.background};
        width: 40%;
        padding-bottom: 50px;
    }

    @media only screen and (max-width: 61.98em) {
        background-image: none;
        text-align: center;
        padding: 8vw;

        h1 {
            font-size: 3rem;
            hyphens: manual;
        }

        h2 {
            padding-top: 20px;
            font-size: 1rem;
            line-height: 2rem;
            width: 100%;
        }
    }
`
