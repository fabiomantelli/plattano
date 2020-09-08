import React, { useState } from 'react'

import { Container } from './toggle.styles'

const Toggle: React.FC<{
    checked: boolean
    sidebar?: string
    click: () => void
}> = props => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = e => {
        e.preventDefault()
        setSidebarClass('sidebar close')
    }
    return (
        <Container>
            <div className={sidebarClass}>
                <input
                    type="checkbox"
                    id="checkbox-menu"
                    onClick={props.click}
                    checked={props.checked}
                />
                <label htmlFor="checkbox-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </Container>
    )
}

export default Toggle
