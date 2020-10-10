import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        padding-top: 20px;
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
