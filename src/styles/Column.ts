import styled from 'styled-components'
import media from './media'

const Column = styled.div<{
    size: number
    collapse?: string
    marginTop?: number
    marginRight?: number
    marginBottom?: number
    marginLeft?: number
    boxShadow?: boolean
    paddingTop?: number
    paddingRight?: number
    paddingBottom?: number
    paddingLeft?: number
    padding?: number
    backgroundColor?: boolean
    maxWidth?: number
}>`
    flex: ${props => props.size};

    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}

    max-width: ${props => props.maxWidth}px;

    background-color: ${props =>
        props.backgroundColor === true
            ? props.theme.colors.background
            : 'none'};

    box-shadow: ${props =>
        props.boxShadow === true
            ? '0px 10px 20px rgba(171, 171, 171, 0.15)'
            : 'none'};

    margin-top: ${props => props.marginTop}rem;
    margin-right: ${props => props.marginRight}rem;
    margin-bottom: ${props => props.marginBottom}rem;
    margin-left: ${props => props.marginLeft}rem;

    padding-top: ${props => props.paddingTop}rem;
    padding-right: ${props => props.paddingRight}rem;
    padding-bottom: ${props => props.paddingBottom}rem;
    padding-left: ${props => props.paddingLeft}rem;
    padding: ${props => props.padding}rem;

    // border: green solid 1px;
`

export default Column
