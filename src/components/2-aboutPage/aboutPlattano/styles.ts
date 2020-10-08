import styled from 'styled-components'

export const Container = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 300;
        color: ${props => props.theme.colors.text};
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
        background-image: none;

        br {
            display: none;
        }
    }
`
