import styled from 'styled-components'

export const ContainerIcons = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        color: ${props => props.theme.colors.text};
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        justify-content: center;
    }
`
