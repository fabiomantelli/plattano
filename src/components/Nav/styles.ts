import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    white-space: nowrap;
    justify-items: center;
    align-items: center;

    @media only screen and (max-width: 42.98em) {
        display: flex;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
`
