import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-size: ${props => props.theme.font.size};
 }

 body {
     background: ${props => props.theme.colors.background};
     color: ${props => props.theme.colors.text};
     font-family: 'Rubik', sans-serif;

 }

 h1 {
     font-size: 1rem;
 }

h2 {
    font-size: 1rem;
}

 h3 {
     font-size: 0.88rem;
 }
`
