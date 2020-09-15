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
`

export default Row
