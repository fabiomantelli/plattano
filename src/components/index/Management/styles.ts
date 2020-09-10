import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90vh;
    background-image: url('/assets/management/management-background.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: left -90% bottom -90%;
    padding: 8vw;

    h1 {
        font-size: 3.88rem;
        font-weight: normal;
        color: ${props => props.theme.colors.background};
    }

    h2 {
        font-size: 1.33rem;
        font-weight: normal;
        text-align-last: center;
        line-height: 2.5rem;
        color: ${props => props.theme.colors.background};
        padding-top: 10px;
    }

    button {
        background-color: transparent;
        color: white;
        border-color: white;
        padding: 8px 15px 8px 15px;
        margin-top: 15px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        padding: 8vw;

        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 1rem;
            line-height: 2rem;
        }

        br {
            display: none;
        }
    }
`
