import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    input {
        width: 25vw;
        max-width: 300px;
        min-width: 200px;
        height: 2rem;
        text-indent: 0.5rem;
        border: none;
        background-color: #e6e0da;
    }

    textarea {
        margin: 0.5rem 0;
        background-color: #e6e0da;
        border: none;
        width: 85%;
        height: 7rem;
        padding: 0.5rem 0 0 0.5rem;
    }

    label {
        padding: 0.3rem 0;
        font-size: 0.778rem;
    }

    button {
        width: fit-content;
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-color: transparent;
        padding: 6px 15px 6px 15px;
        cursor: pointer;
    }
`
