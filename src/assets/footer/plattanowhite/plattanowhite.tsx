import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

function PlattanoWhite(): JSX.Element {
    return (
        <Container>
            <Link href="/">
                <img
                    src="/assets/footer/plattanowhite-icon.png"
                    alt="Plattano Icon"
                />
            </Link>
        </Container>
    )
}

export default PlattanoWhite
