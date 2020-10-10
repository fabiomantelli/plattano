import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-top: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: normal;
    }

    h2 {
        padding: 15px 0px;
        font-weight: 300;
        line-height: 1.5rem;
    }

    h3 {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
    }

    .atendemos {
        font-size: 0.8rem;
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
        background-image: none;
        padding: 2rem;

        h2 {
            padding: 2vw;
        }

        br {
            display: none;
        }
    }
`