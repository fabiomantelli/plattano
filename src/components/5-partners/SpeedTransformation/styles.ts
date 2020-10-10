import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;

    h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
    }

    @media only screen and (max-width: 61.98em) {
        flex-direction: column;
        background-image: none;
        text-align: center;

        h1 {
            font-size: 2rem;
        }
    }
`
