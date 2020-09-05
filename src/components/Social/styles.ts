import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    h1 {
        font-size: 1.33rem;
        margin: 15px 0;
    }

    h2 {
        font-size: 0.88rem;
        font-weight: 300;
    }

    @media only screen and (max-width: 600px) {
        align-items: center;
        justify-content: center;
    }
`
