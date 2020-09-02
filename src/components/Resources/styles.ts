import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
        font-weight: normal;
    }

    h2 {
        font-weight: 300;
    }
    h3 {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
    }
`
