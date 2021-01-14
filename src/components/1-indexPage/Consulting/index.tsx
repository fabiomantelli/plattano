import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'
import { ButtonElement } from '../../../styles/Buttons'

const Consulting: React.FC = () => {
    return (
        <ItemsIndexContainer>
            <h1>
                Licenciamento <br /> e Consultoria
            </h1>
            <h2>
                Auxiliamos nossos clientes, após análise inicial dos
                requerimentos, qual a melhor solução e licenciamento de produtos
                para cada caso.
            </h2>
            <div>
                <Link href="/licenciamento">
                    <ButtonElement>Leia Mais</ButtonElement>
                </Link>
            </div>
        </ItemsIndexContainer>
    )
}

export default Consulting
