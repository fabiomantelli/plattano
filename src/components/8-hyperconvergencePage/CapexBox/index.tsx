import React from 'react'
import CapexBoxIcon from '../../../assets/8-hyperconvergence/capexbox/capexboxIcon'

import { Container } from './styles'

const CapexBox: React.FC = () => {
    return (
        <>
            <Container>
                <CapexBoxIcon />
                <div>
                    <h1>CapEx e OpEx baixo</h1>
                    <p>
                        Baixo investimento inicial, aproveitando-se de
                        servidores comuns, sem hardware proprietário. Serviço de
                        entrega rápido, redução na operação e manutenção. Equipe
                        focada na estratégia da empresa.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default CapexBox
