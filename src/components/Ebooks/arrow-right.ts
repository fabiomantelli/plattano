import styled from 'styled-components'

export const ArrowRight = styled.div`
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;

    border-left: 20px solid ${props => props.theme.colors.primary};
`
