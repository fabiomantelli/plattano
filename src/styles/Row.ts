import styled from 'styled-components'
import media from './media'

const Row = styled.div<{
    background?: boolean
    position?: string
    marginTop?: number
    marginBottom?: number
    paddingTop?: number
    collapse?: string
}>`
    display: flex;
    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}

    background: ${props =>
        props.background === true ? props.theme.colors.gradient : false};

    position: ${props => props.position};
    padding-top: ${props => props.paddingTop}vh;
    margin-top: ${props => props.marginTop}vh;
    margin-bottom: ${props => props.marginBottom}vw;
`

export default Row
