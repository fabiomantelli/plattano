import React from 'react'

import { Container } from './styles'

const History2: React.FC = () => {
    return (
        <Container>
            <h2>
                Podemos definir virtualização como uma forma de se executar
                vários serviços, programas, ou até mesmo sistemas operacionais
                em um único equipamento físico. A virtualização{' '}
                <b>possibilita </b>
                inclusive simular hardwares diferentes em um equipamento como
                roteadores, switchs, servidores, celulares, etc. Hoje,
                praticamente é impossível fazer qualquer serviço na internet sem
                que se tenha passado ou utilizado um ou mais servidores
                virtualizados. Um grande exemplo são os serviços de{' '}
                <b>Cloud Computing</b>, onde servidores em sua maioria
                virtualizados, formam uma grande rede distribuída, havendo
                servidores dedicados para cada serviço específico.
            </h2>
        </Container>
    )
}

export default History2
