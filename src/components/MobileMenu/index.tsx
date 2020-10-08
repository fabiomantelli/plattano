import React from 'react'
import Navbar from '../Navbar'

import { Container } from './styles'

const MobileMenu: React.FC<{
    isActive: string
}> = props => {
    return (
        <Container>
            <div className={props.isActive}>
                <Navbar />
            </div>
        </Container>
    )
}

export default MobileMenu
