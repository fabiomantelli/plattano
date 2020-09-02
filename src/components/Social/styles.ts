import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};

    h1 {
        font-size: 1.33rem;
    }

    h2 {
        font-size: 0.88rem;
        font-weight: 300;
    }
`
