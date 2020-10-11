import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    p {
        border: 1px solid #d5d5d3;
        box-sizing: border-box;
        box-shadow: 0px 4px 16px rgba(234, 114, 0, 0.16);
        margin-top: 1rem;
        padding: 1rem;
    }

    p:hover {
        border: 1px solid ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 61.98em) {
        p {
            font-size: 0.9rem;
        }
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
        padding: 8vw;
    }
`
