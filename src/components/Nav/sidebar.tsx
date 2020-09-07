import React, { useState } from 'react'
import Navbar from './Navbar'

import { Container } from './sidebar.styles'

const Sidebar: React.FC = props => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = e => {
        e.preventDefault()
        setSidebarClass('sidebar close')
        props.close()
    }
    return (
        <Container>
            <div className={sidebarClass}>
                <Navbar />
            </div>
        </Container>
    )
}

export default Sidebar
