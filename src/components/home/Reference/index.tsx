import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'
import { ButtonElement } from '../../../styles/Buttons'

const Reference: React.FC = () => {
    return (
        <ItemsIndexContainer>
            <h1>
                Referência Nacional <br />
                em BaaS
            </h1>
            <h2>
            O  uso da nuvem para backup Off-Site se tornou uma 
            tendência mundial. Já é comum as empresas utilizarem 
            essa tecnologia para proteção de datacentes.
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
