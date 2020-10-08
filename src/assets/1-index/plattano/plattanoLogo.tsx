import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export default function PlattanoImage(): JSX.Element {
    return (
        <Container>
            <Link href="/">
                <img
                    src="/assets/header/plattano-logo.svg"
                    alt="Plattano Technologies"
                />
            </Link>
        </Container>
    )
}
