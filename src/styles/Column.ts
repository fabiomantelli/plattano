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
}>`
    flex: ${props => props.size};

    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}

    background-color: ${props =>
        props.backgroundColor === true
            ? props.theme.colors.background
            : 'none'};

    box-shadow: ${props =>
        props.boxShadow === true
            ? '0px 10px 20px rgba(171, 171, 171, 0.15)'
            : 'none'};

    margin-top: ${props => props.marginTop}vw;
    margin-right: ${props => props.marginRight}vw;
    margin-bottom: ${props => props.marginBottom}vw;
    margin-left: ${props => props.marginLeft}vw;

    padding-top: ${props => props.paddingTop}vw;
    padding-right: ${props => props.paddingRight}vw;
    padding-bottom: ${props => props.paddingBottom}vw;
    padding-left: ${props => props.paddingLeft}vw;
    padding: ${props => props.padding}vw;

    border: green solid 1px;
`

export default Column
