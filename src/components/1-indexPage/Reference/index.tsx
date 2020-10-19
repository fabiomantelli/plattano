import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'

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
                <span>Leia mais</span>
                <Link href="/baas">
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

export default Reference
