import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;

    p {
        padding-top: 2rem;
        font-weight: 300;
        color: ${props => props.theme.colors.text};
        line-height: 1.5rem;
        padding-right: 2rem;
    }

    @media only screen and (max-width: 61.98em) {
        flex-direction: column;
        text-align: center;
    }
`
