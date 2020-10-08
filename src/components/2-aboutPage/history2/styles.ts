import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 2rem;

    h2 {
        padding: 15px 0px;
        font-weight: 300;
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
        padding: 2rem;

        br {
            display: none;
        }
    }
`
