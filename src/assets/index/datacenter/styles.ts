import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    vertical-align: middle;
    display: table-cell;
    img {
        max-width: 100%;
        max-height: 100%;
    }

    @media only screen and (min-width: 1025px) {
        float: right;
    }
`
