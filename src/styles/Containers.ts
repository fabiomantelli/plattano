import styled from 'styled-components'
import media from './media'

interface IMainContainer {
    changedMediaQueries?: string
    url?: string
    backgroundSize?: string
    position?: string
}

export const MainContainer = styled.div<IMainContainer>`
    height: calc(100vh - 70px);
    display: flex;
    position: ${props => (props.position ? props.position : 'none')};
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: ${props => props.backgroundSize};

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
            text-align: center;
            padding: 8vw;
            background-image: none;
        `)}
`

interface IMainGeometricContainer {
    changedMediaQueries?: string
}

export const MainGeometricContainer = styled.div<IMainGeometricContainer>`
    position: relative;

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
            img {
                display: none;
            }
        `)}
`

export const PolygonContainer = styled.div`
    height: calc(100vh - 70px);
    clip-path: polygon(0 0, 100% 0, 41% 100%, 0% 100%);
    z-index: 1;
    background: ${props => props.theme.colors.gradient};

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
`

interface IHexagonContainer {
    changedMediaQueries?: string
    height?: string
}

export const HexagonContainer = styled.div<IHexagonContainer>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${props => (props.height ? props.height : '100vh')};
    padding: 2rem;

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
        align-items: center;
        text-align: center;
        height: auto;
        padding: 8vw;

        br {
            display: none;
        }
        `)}
`

interface IImageContainer {
    height?: string
    justifyContent?: string
}

export const ImageContainer = styled.div<IImageContainer>`
    height: ${props => (props.height ? props.height : '100vh')};
    display: flex;
    justify-content: ${props =>
        props.justifyContent
            ? props.justifyContent
            : 'flex-end'}; /* align horizontal */
    align-items: center; /* align vertical */

    img {
        max-width: 100%;
        max-height: 100%;
    }
`

export const HelpContainer = styled.div<{ changedMediaQueries?: string }>`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-top: 2rem;

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
        align-items: center;
        text-align: center;
        height: auto;
        background-image: none;
        padding: 2rem;
        `)}
`

export const SendContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    input {
        width: 25vw;
        max-width: 300px;
        min-width: 200px;
        height: 2rem;
        text-indent: 0.5rem;
        border: none;
        background-color: #e6e0da;
    }

    textarea {
        margin: 0.5rem 0;
        background-color: #e6e0da;
        border: none;
        width: 85%;
        height: 7rem;
        padding: 0.5rem 0 0 0.5rem;
    }

    label {
        padding: 0.3rem 0;
        font-size: 0.778rem;
    }

    button {
        width: fit-content;
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-color: transparent;
        padding: 6px 15px 6px 15px;
        cursor: pointer;
    }
`

export const BenefitContainer = styled(HexagonContainer)`
    justify-content: flex-start;
    height: auto;
`

export const BoxContainer = styled.div<{ changedMediaQueries?: string }>`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    p {
        border: 1px solid #d5d5d3;
        box-sizing: border-box;
        margin-top: 1rem;
        padding: 1rem;
    }

    p:hover {
        border: 1px solid ${props => props.theme.colors.primary};
    }

    ${props =>
        props.changedMediaQueries &&
        media[props.changedMediaQueries](`
        align-items: center;
        text-align: center;
        height: auto;
        padding: 8vw;
        `)}
`

export const BoxItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;

    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    margin: 2rem;

    p,
    h1 {
        margin-left: 1rem;
    }

    :hover {
        border: 1px solid ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 61.98em) {
        p {
            font-size: 0.85rem;
        }
    }
    @media only screen and (max-width: 42.98em) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem;

        h1,
        p {
            margin-top: 1rem;
        }
    }
`

export const ModernityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: calc(100vh - 70px);
    background-image: url('/assets/1-index/management-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-position: 0 230px;
    padding: 2rem;

    @media only screen and (max-width: 42.98em) {
        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 1rem;
            line-height: 2rem;
        }
    }
`

export const BoxDefaultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 2rem;

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
        padding: 8vw;

        br {
            display: none;
        }
    }
`

export const EntireContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 2rem;
        font-weight: 400;
        text-align-last: center;
    }

    h3 {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
    }
`

export const ItemsIndexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 2rem 2rem;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
    }

    h2 {
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        padding-top: 10px;
    }

    h3 {
        padding-top: 0.6rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
    }

    a {
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
    }

    img {
        width: 18px;
        height: 10.5px;
    }

    @media only screen and (max-width: 61.98em) {
        align-items: center;
        text-align: center;
        padding: 1rem;

        br {
            display: none;
        }

        h3 {
            padding-top: 0.6rem;
        }
    }

    @media only screen and (max-width: 41.98em) {
        h3 {
            padding-top: 0.9rem;
        }
    }
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    padding-bottom: 15px;

    a {
        color: ${props => props.theme.colors.background};
    }
`

export const FooterLogosContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    padding-bottom: 15px;

    h1 {
        font-size: 0.77rem;
        color: ${props => props.theme.colors.background};
    }
`

export const SpeedTransformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;

    h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
    }

    @media only screen and (max-width: 61.98em) {
        flex-direction: column;
        background-image: none;
        text-align: center;
        padding-left: 0;

        h1 {
            font-size: 2rem;
        }
    }
`

export const GeneralText = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;

    p {
        padding-top: 2rem;
        font-weight: 300;
        color: ${props => props.theme.colors.text};
        line-height: 1.5rem;
        padding-right: 2rem;
    }

    @media only screen and (max-width: 61.98em) {
        flex-direction: column;
        text-align: center;

        p {
            padding-right: 0;
        }
    }
`

export const PartnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: 400;
        padding-top: 20px;
    }

    p {
        padding-top: 20px;
        font-weight: 300;
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 42.98em) {
        align-items: center;
        text-align: center;
        height: auto;
    }
`

export const MiniBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
        padding-bottom: 1rem;
    }

    h2 {
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        padding-bottom: 1rem;
    }

    a {
        text-decoration: none;
        white-space: nowrap;
        color: ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 61.98em) {
        align-items: center;
        text-align: center;
        padding: 1rem;

        a {
            padding-top: 0.6rem;
        }
    }

    @media only screen and (max-width: 41.98em) {
        a {
            padding-top: 0.9rem;
        }
    }
`

export const BoxVisionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 2rem 2rem;

    h1 {
        font-size: 1.33rem;
        color: ${props => props.theme.colors.text};
    }

    h2 {
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        margin-top: 10px;
    }

    h3 {
        padding-top: 0.6rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
    }

    a {
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
    }

    @media only screen and (max-width: 61.98em) {
        align-items: center;
        text-align: center;
        padding: 1rem;

        br {
            display: none;
        }

        h3 {
            padding-top: 0.6rem;
        }
    }

    @media only screen and (max-width: 41.98em) {
        h3 {
            padding-top: 0.9rem;
        }
    }
`
