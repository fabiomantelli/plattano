import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;

    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    margin: 2rem;

    p,
    h1 {
        margin-left: 1rem;
    }

    :hover {
        border: 1px solid ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 61.98em) {
        p {
            font-size: 0.85rem;
        }
    }

    @media only screen and (max-width: 42.98em) {
        flex-direction: column;
        align-items: center;
        text-align: center;

        padding: 2rem;

        p,
        h1 {
            margin-top: 1rem;
        }
    }
`
