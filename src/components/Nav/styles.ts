import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    white-space: nowrap;
    justify-items: center;

    @media only screen and (max-width: 600px) {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        a {
            font-size: 20px;
        }
    }
`
