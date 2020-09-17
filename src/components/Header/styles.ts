import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;

    a {
        font-size: 0.88rem;
        text-decoration: none;
        color: inherit;
    }

    @media only screen and (max-width: 62.98em) {
        a {
            font-size: 0.75rem;
        }
    }
`
