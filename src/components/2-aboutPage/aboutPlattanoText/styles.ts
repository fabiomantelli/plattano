import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    p {
        font-weight: 300;
        color: ${props => props.theme.colors.text};
        margin-bottom: 15px;
        line-height: 1.4rem;
    }

    @media only screen and (max-width: 42.98em) {
        text-align: center;
    }
`
