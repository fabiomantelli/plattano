import React from 'react'
import { Container } from './styles'

const Hamburguer: React.FC<{
    isActive: string
    click: () => void
}> = props => {
    return (
        <Container onClick={props.click}>
            <span className={props.isActive}></span>
            <span className={props.isActive}></span>
            <span className={props.isActive}></span>
        </Container>
    )
}

export default Hamburguer
