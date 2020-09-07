import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    margin-right: 3vw;

    #checkbox-menu {
        position: absolute;
        opacity: 0;
    }

    label {
        cursor: pointer;
        position: relative;
        display: block;
        height: 22px;
        width: 30px;
    }

    label span {
        position: absolute;
        display: block;
        height: 5px;
        width: 100%;
        border-radius: 30px;
        background: #f16234;
        transition: 0.25s ease-in-out;
    }

    label span:nth-child(1) {
        top: 0;
    }

    label span:nth-child(2) {
        top: 8px;
    }

    label span:nth-child(3) {
        top: 16px;
    }

    #checkbox-menu:checked + label span:nth-child(1) {
        transform: rotate(-45deg);
        top: 8px;
    }

    #checkbox-menu:checked + label span:nth-child(2) {
        opacity: 0;
    }

    #checkbox-menu:checked + label span:nth-child(3) {
        transform: rotate(45deg);
        top: 8px;
    }
`
