import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'

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
                <span style={{ color: '#F48200' }}>Leia mais</span>
                <Link href="/consultoria">
                    <img
                        src="/assets/1-index/arrow-icon.png"
                        alt="Arrow Icon"
                        style={{ marginLeft: '15px', cursor: 'pointer' }}
                    />
                </Link>
            </div>
        </ItemsIndexContainer>
    )
}

export default Consulting
