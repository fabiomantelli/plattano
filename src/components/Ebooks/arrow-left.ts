import styled from 'styled-components'

export const ArrowLeft = styled.div`
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent; 
    border-right:20px solid ${props => props.theme.colors.primary};
`
