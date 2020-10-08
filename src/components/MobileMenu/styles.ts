import styled from 'styled-components'

export const Container = styled.div`
    @media only screen and (max-width: 42.98em) {
        .initial {
            display: none;
        }

        .not-active {
            height: 100vh;
            width: 100%;
            background-color: black;
            position: fixed;
            z-index: 200;
            left: 0;
            animation: slide-closed 0.7s forwards;
            border: green solid 1px;
        }
        .active {
            height: 100vh;
            width: 100%;
            background-color: black;
            position: fixed;
            z-index: 200;
            left: -100%;
            animation: slide-open 0.7s forwards;
            border: green solid 1px;
        }

        @keyframes slide-open {
            100% {
                left: 0;
            }
        }
        @keyframes slide-closed {
            100% {
                left: -100%;
            }
        }
    }
`
