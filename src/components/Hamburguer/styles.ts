import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    height: 70px;
    cursor: pointer;
    margin-left: auto;

    span {
        display: block;
        width: 70%;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        height: 5px;
        background: ${props => props.theme.colors.primary};
        transition: all 0.7s;
        position: relative;
    }

    span + span {
        margin-top: 6px;
    }

    .active:nth-child(1) {
        animation: ease 0.7s top forwards;
    }

    .not-active:nth-child(1) {
        animation: ease 0.7s top-2 forwards;
    }

    .active:nth-child(2) {
        animation: ease 0.7s scaled forwards;
    }

    .not-active:nth-child(2) {
        animation: ease 0.7s scaled-2 forwards;
    }

    .active:nth-child(3) {
        animation: ease 0.7s bottom forwards;
    }

    .not-active:nth-child(3) {
        animation: ease 0.7s bottom-2 forwards;
    }

    @keyframes top {
        0% {
            top: 0;
            transform: rotate(0);
        }
        50% {
            top: 12px;
            transform: rotate(0);
        }
        100% {
            top: 12px;
            transform: rotate(45deg);
        }
    }

    @keyframes top-2 {
        0% {
            top: 12px;
            transform: rotate(45deg);
        }
        50% {
            top: 12px;
            transform: rotate(0deg);
        }
        100% {
            top: 0;
            transform: rotate(0deg);
        }
    }

    @keyframes bottom {
        0% {
            bottom: 0;
            transform: rotate(0);
        }
        50% {
            bottom: 10px;
            transform: rotate(0);
        }
        100% {
            bottom: 10px;
            transform: rotate(135deg);
        }
    }

    @keyframes bottom-2 {
        0% {
            bottom: 10px;
            transform: rotate(135deg);
        }
        50% {
            bottom: 10px;
            transform: rotate(0);
        }
        100% {
            bottom: 0;
            transform: rotate(0);
        }
    }

    @keyframes scaled {
        50% {
            transform: scale(0);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes scaled-2 {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
`
