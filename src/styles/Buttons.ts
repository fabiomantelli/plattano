import styled from 'styled-components'

export const MainButton = styled.button`
    background-color: transparent;
    color: white;
    border-color: white;
    padding: 8px 15px 8px 15px;
    margin-top: 1rem;
    cursor: pointer;
`

export const ButtonElement = styled.button`
    width: fit-content;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border-color: transparent;
    padding: 8px 15px 8px 15px;
    margin-top: 15px;
    cursor: pointer;
`
