import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        padding-top: 20px;
    }

    h2 {
        padding-top: 40px;
    }

    p {
        padding-top: 20px;
        font-weight: 300;
        line-height: 1.5rem;
    }

    span {
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

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
        padding: 8vw;

        br {
            display: none;
        }
    }
`
