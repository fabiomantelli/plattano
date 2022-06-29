import styled from 'styled-components'

export const Container = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.gradient};
    color: ${props => props.theme.colors.background};

    ul {
        padding: 2rem;
        width: 50%;
        line-height: 1.2rem;
    }

    h1 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
    }
    .wrapper-out {
        display: none;
    }
    .wrapper {
        height: 50vh;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .text {
        height: 20vh;
        padding: 0 2rem 2rem 2rem;
    }

    @media only screen and (max-width: 61.98em) {
        height: auto;

        ul {
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        li {
            padding-top: 0.5rem;
        }

        .wrapper-out {
            display: flex;
            height: auto;
            flex-direction: column;
            align-items: center;
        }
        .wrapper {
            display: none;
        }

        .text {
            height: auto;
            text-align: center;
        }
    }
`
