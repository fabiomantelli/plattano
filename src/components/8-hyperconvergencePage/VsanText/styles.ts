import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    p {
        padding-top: 20px;
        font-weight: 300;
        line-height: 1.5rem;
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
