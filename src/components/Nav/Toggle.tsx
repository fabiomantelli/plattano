import React from 'react'

import { Container } from './toggle.styles'

const Toggle: React.FC<{
    defaultChecked: boolean
    click: () => void
}> = props => {
    return (
        <Container>
            <input
                type="checkbox"
                id="checkbox-menu"
                onClick={props.click}
                defaultChecked={props.defaultChecked}
            />
            <label htmlFor="checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </Container>
    )
}

export default Toggle
