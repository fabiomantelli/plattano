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

    p {
        padding-top: 20px;
        font-weight: 300;
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
    }
`
