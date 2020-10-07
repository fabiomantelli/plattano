import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .sidebar {
        height: 100vh;
        width: 100vw;
        background-color: black;
        position: fixed;
        z-index: 200;
        left: -100%;
        animation: slide-open 0.7s forwards;
    }

    a {
        color: ${props => props.theme.colors.background};
        text-decoration: none;
    }

    @keyframes slide-open {
        100% {
            left: 0;
        }
    }

    .sidebar.close {
        left: 0;
        animation: slide-closed 0.5s forwards;
    }

    @keyframes slide-closed {
        100% {
            left: -100%;
        }
    }
`
