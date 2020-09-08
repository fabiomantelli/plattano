import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

function ManagementImage(): JSX.Element {
    return (
        <Container>
            <Link href="/">
                <img src="/assets/readmore/arrow-icon.png" alt="Arrow Icon" />
            </Link>
        </Container>
    )
}

export default ManagementImage
