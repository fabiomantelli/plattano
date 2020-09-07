import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-left: 5vw;

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

    button {
        width: fit-content;
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-color: transparent;
        padding: 8px 15px 8px 15px;
        margin-top: 15px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        align-items: center;
        text-align: center;
        height: auto;
        padding: 5vh;

        br {
            display: none;
        }
    }
`
