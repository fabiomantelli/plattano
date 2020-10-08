import React from 'react'
import Navbar from '../Navbar'

import { Container } from './styles'

const MobileMenu: React.FC<{
    isActive: string
    click: () => void
}> = props => {
    return (
        <Container onClick={props.click}>
            <div className={props.isActive}>
                <Navbar />
            </div>
        </Container>
    )
}

export default MobileMenu
