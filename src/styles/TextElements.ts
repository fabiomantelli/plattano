import styled from 'styled-components'
import media from './media'

export const MainTitle = styled.h1`
    font-size: 3.88rem;
    font-weight: 300;
    color: ${props => props.theme.colors.background};

    @media only screen and (max-width: 42.98em) {
        h1 {
            font-size: 3rem;
        }
    }
`

export const MainSubTitle = styled.h2`
    font-size: 1.33rem;
    font-weight: 300;
    text-align-last: center;
    line-height: 2.5rem;
    color: ${props => props.theme.colors.background};
    padding: 1rem 2rem;
    max-width: 1280px;

    @media only screen and (max-width: 42.98em) {
        h2 {
            font-size: 1rem;
            line-height: 2rem;
        }
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 300;
    color: ${props => props.theme.colors.background};

    @media only screen and (max-width: 61.98em) {
        font-size: 3.5rem;
        br {
            display: none;
        }
    }

    @media only screen and (max-width: 75em) {
        /* para a figura à direita não bater em responsividade */
        font-size: 2.8rem;
    }
`
export const SubTitle = styled.h2<{ changedMediaQueries?: string }>`
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.background};
    line-height: 1.5rem;
    max-width: 35%;

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
            padding-top: 1rem;
            max-width: none;
        `)}
`

export const HexagonTitle = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    padding-top: 20px;
`
export const HexagonParagraph = styled.p<{ changedMediaQueries?: string }>`
    padding-top: 20px;
    font-weight: 300;
    line-height: 1.5rem;

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
            font-size: 0.8rem;

        `)}
`

export const ContactTitle = styled.h1`
    font-size: 2rem;
    font-weight: 400;
`

export const ContactSubTitle = styled.h2`
    padding: 15px 0px;
    font-weight: 300;
    line-height: 1.5rem;
`
export const ContactSpan = styled.span`
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 0.778rem;
`

export const MiniOrangeTitle = styled.h1`
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
`

export const TitleFooter = styled.h1`
    font-size: 0.77rem;
    color: ${props => props.theme.colors.background};
`

export const SupportTitle = styled.h1`
    font-size: 1.33rem;
    font-weight: 300;
    color: ${props => props.theme.colors.text};

    @media only screen and (max-width: 42.98em) {
        h1 {
            font-size: 1rem;
        }
    }
`
