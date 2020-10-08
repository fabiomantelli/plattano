import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    white-space: nowrap;
    justify-items: center;
    align-items: center;

    @media only screen and (max-width: 42.98em) {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 70px);
        justify-content: space-evenly;
        align-items: flex-start;
        padding-left: 30px;

        a {
            text-decoration: none;
            color: ${props => props.theme.colors.background};
            border-top: 2px solid rgba(255, 255, 255, 0.1);
            width: 90%;
            padding-top: 10px;
        }
    }
`
