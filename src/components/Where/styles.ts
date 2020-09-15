import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    padding: 0 2rem 2rem 2rem;

    h1 {
        font-size: 1.33rem;
        margin: 15px 0;
    }

    span {
        font-size: 0.88rem;
        font-weight: 300;
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
    }
`
