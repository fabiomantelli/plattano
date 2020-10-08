import styled from 'styled-components'

export const Container = styled.div`
    .not-active {
        display: none;
        /* animation: slide-closed 3s forwards; */
    }
    @media only screen and (max-width: 42.98em) {
        .active {
            height: 100vh;
            width: 100%;
            background-color: black;
            position: fixed;
            z-index: 200;
            left: -100%;
            animation: slide-open 0.7s forwards;
        }

        @keyframes slide-open {
            100% {
                left: 0;
            }
        }
        .not-active {
            left: 0;
            animation: slide-closed 0.5s forwards;
        }
        @keyframes slide-closed {
            100% {
                left: -100%;
            }
        }
    }
`
