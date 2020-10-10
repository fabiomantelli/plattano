import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    justify-content: baseline;

    align-items: center;
    position: relative;

    img {
        position: absolute;
        left: 0;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
    }
`
