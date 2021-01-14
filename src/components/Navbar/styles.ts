import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    height: 70px;
    white-space: nowrap;
    justify-items: center;
    align-items: center;

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }

    @media only screen and (max-width: 61.98em) {
        a {
            font-size: 0.7rem;
        }
    }

    @media only screen and (max-width: 42.98em) {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 70px);
        align-items: flex-start;
        padding-left: 30px;
        padding-top: 40px;
        
        a {
            padding-bottom: 6vh;
            font-size: 1.2rem;
            color: ${props => props.theme.colors.background};
            border-top: 2px solid rgba(255, 255, 255, 0.1);
            width: 90%;
            padding-top: 10px;
        }
    }
`
