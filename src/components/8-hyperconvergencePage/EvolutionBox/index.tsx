import React from 'react'
import EvolutionBoxIcon from '../../../assets/8-hyperconvergence/evolutionbox/evolutionBoxIcon'

import { Container } from './styles'

const EvolutionBox: React.FC = () => {
    return (
        <>
            <Container>
                <EvolutionBoxIcon />
                <div>
                    <h1>Evolução e Modernidade</h1>
                    <p>
                        O dimensionamento de datacenter pode ser um processo
                        caro e complicado. Com sua simplicidade e capacidade de
                        dimensionamento, o VMware vSan é capaz de atender à
                        rápida evolução das necessidades de negócios
                    </p>
                </div>
            </Container>
        </>
    )
}

export default EvolutionBox
