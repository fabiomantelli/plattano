import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'
import { ButtonElement } from '../../../styles/Buttons'

const Reference: React.FC = () => {
    return (
        <ItemsIndexContainer>
            <h1>
                Referência Nacional <br />
                em BaaS e DRaas
            </h1>
            <h2>
                A terceirização do backup e DR se tornou uma tendência. Já é
                comum as empresas utilizarem essa tecnologia para proteção de
                datacenters.
            </h2>
            <div>
                <Link href="/produtos/baas">
                <ButtonElement>Leia Mais</ButtonElement>
                </Link>
            </div>
        </ItemsIndexContainer>
    )
}

export default Reference
