import React from 'react'
import StorageBoxIcon from '../../../assets/8-hyperconvergence/storagebox/storageIcon'

import { Container } from './styles'

const StorageBox: React.FC = () => {
    return (
        <>
            <Container>
                <StorageBoxIcon />
                <div>
                    <h1>Armazenamento definido por software (SDS)</h1>
                    <p>
                        O SDS substitui o hardware estático e ineficiente por
                        soluções dinâmicas, ágeis e automatizadas. Astecnologias
                        SDS simples e inteligentes da VMware oferecem uma
                        solução de armazenamento mais dimensionável, flexível e
                        automatizada para os negócios e as demandas de
                        aplicativos de hoje.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default StorageBox
