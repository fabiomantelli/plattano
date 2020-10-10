import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;

    h1 {
        font-weight: 300;
        font-size: 2rem;
    }

    p {
        font-weight: 300;
        line-height: 1.5rem;
        margin-left: 7rem;
    }

    @media only screen and (max-width: 61.98em) {
        flex-direction: column;
        text-align: center;

        p {
            margin-top: 2rem;
            margin-left: 0;
        }
    }
`
