import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    p {
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        box-shadow: 0px 4px 16px rgba(234, 114, 0, 0.16);
        margin: 24px 0px 0px 24px;
        padding: 1rem;
    }

    #reduction-p {
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
