import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20vh;

    input {
        height: 5.5vh;
        width: 40vh;
        margin-right: 1vh;
        text-indent: 1vh;
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
        height: 13vh;
    }
`
