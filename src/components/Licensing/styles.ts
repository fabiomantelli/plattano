import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
        padding-top: 10px;
    }

    h2 {
        font-weight: normal;
        color: ${props => props.theme.colors.text};
        padding-top: 10px;
    }

    h3 {
        padding-top: 10px;
        font-weight: normal;
        color: ${props => props.theme.colors.primary};
    }
`
