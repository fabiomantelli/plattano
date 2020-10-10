import React from 'react'

import { Container } from './styles'

import ReadMore from '../../ReadMore'

const Reference: React.FC = () => {
    return (
        <Container>
            <h1>
                Referência Nacional <br />
                em BaaS e DRaas
            </h1>
            <h2>
                A terceirização do backup e DR se tornou uma tendência. Já é
                comum as empresas utilizarem essa tecnologia para proteção de
                datacenters.
            </h2>
            <ReadMore />
        </Container>
    )
}
export default Reference
