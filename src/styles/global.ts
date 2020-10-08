import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-size: ${props => props.theme.font.size};


    @media only screen and (max-width: 82em) {
        font-size: ${props => props.theme.laptop.font.size};
    }

    @media only screen and (max-width: 62em) {
        font-size: ${props => props.theme.tablet.font.size};
    }

    @media only screen and (max-width: 43em) {
        font-size: ${props => props.theme.mobile.font.size};
    }
 }

 body {
     background: ${props => props.theme.colors.background};
     color: ${props => props.theme.colors.text};
     font-family: 'Rubik', sans-serif;

 }

 h1 {
     font-size: 1rem;
 }

h2, span {
    font-size: 1rem;
}


 h3 {
     font-size: 0.88rem;
 }

 a {
     font-size: 0.88rem;
 }


`
