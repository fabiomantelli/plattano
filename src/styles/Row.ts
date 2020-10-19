import styled from 'styled-components'
import media from './media'

const Row = styled.div<{
    background?: boolean
    position?: string
    marginTop?: number
    marginBottom?: number
    paddingTop?: number
    collapse?: string
    polygon?: boolean
    zIndex?: number
}>`
    display: flex;
    z-index: ${props => props.zIndex};
    justify-content: center;
    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}

    background: ${props =>
        props.background === true ? props.theme.colors.gradient : false};

    position: ${props => props.position};
    padding-top: ${props => props.paddingTop}rem;
    margin-top: ${props => props.marginTop}rem;
    margin-bottom: ${props => props.marginBottom}rem;
    clip-path: ${props =>
        props.polygon === true
            ? 'polygon(100% 0, 0 0, 0 100%, 100% 85%, 100% 100%);'
            : 'none'};
`

export default Row
