import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const CloudServices: React.FC = () => {
    return (
        <Container>
            <h1>Serviços Cloud</h1>
            <div>
                <h2>BaaS</h2>
                <Link href="/">
                    <a>Veja mais</a>
                </Link>
            </div>

            <div>
                <h2>DRaaS, replicação</h2>
                <Link href="/">
                    <a>Veja mais</a>
                </Link>
            </div>
            <div>
                <h2>Locação de Licenças pay-as-you-go</h2>
                <Link href="/">
                    <a>Veja mais</a>
                </Link>
            </div>
        </Container>
    )
}
export default CloudServices
