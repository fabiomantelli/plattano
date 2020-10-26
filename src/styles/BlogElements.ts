import styled from 'styled-components'

import media from './media'

export const BlogContainer = styled.div`
    display: flex;
`

export const BlogLink = styled.a`
    padding-top: 0.5rem;
    text-decoration: none;
    font-size: 1.33rem;
    font-weight: 400;
    color: #161616;
    cursor: pointer;
    line-height: 120%;

    :hover {
        text-decoration: underline;
    }
`

export const BlogLinkMini = styled.a`
    padding-top: 0.5rem;
    text-decoration: none;
    font-size: 0.778rem;
    font-weight: 400;
    color: #161616;
    cursor: pointer;
    line-height: 120%;

    :hover {
        text-decoration: underline;
    }
`

export const BlogAbstract = styled.p`
    padding-top: 0.5rem;
    font-size: 0.778rem;
    line-height: 160%;
    opacity: 0.8;
`

export const BlogDate = styled.h2`
    font-size: 0.667rem;
    line-height: 160%;
    color: #161616;
    opacity: 0.6;
    margin-top: 0.5rem;
    font-weight: 400;
`
