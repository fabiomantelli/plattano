import React, { useState } from 'react'
import Navbar from './Navbar'

import { Container } from './sidebar.styles'

const Sidebar: React.FC<{ sidebar: string }> = props => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    return (
        <Container>
            <div className={sidebarClass}>
                <Navbar />
            </div>
        </Container>
    )
}

export default Sidebar
