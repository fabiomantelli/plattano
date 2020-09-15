import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 30vh;
    padding: 2rem;

    input {
        width: 25vw;
        max-width: 300px;
        min-width: 250px;
        height: 2rem;
        margin-right: 1rem;
        text-indent: 0.5rem;
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

    @media only screen and (max-width: 42.98em) {
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
