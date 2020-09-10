import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;

    input {
        width: 28vw;
        height: 5vh;
        margin-right: 1vh;
        text-indent: 1vh;
        border: none;
    }

    button {
        width: fit-content;
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-color: transparent;
        padding: 8px 15px 8px 15px;
        cursor: pointer;
    }

    @media only screen and (max-width: 1024px) {
        height: 15vh;
        input {
            width: 40vw;
        }
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 5vw;

        input {
            width: 60vw;
        }
        button {
            margin-top: 5vw;
        }
    }
`
