import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 10px 20px rgba(171, 171, 171, 0.15);

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
