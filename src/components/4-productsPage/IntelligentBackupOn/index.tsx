import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const IntelligentBackupOn: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>Intelligent Backup On-Promise</h1>
            <h2>Faça seus backups Veeam localmente ou em cloud.</h2>
            <p>
                Troque o <b>CapEx</b> pelo <b>OpEx</b> em soluções de backup
                conosco. Entregamos as licenças Veeam para você e sua empresa no
                formato rental ou aluguel mensal, onde você paga pelo consumo
                mensal no modelo <b>pay-as-you go</b>. Você ainda escolhe se
                deseja terceirizar a gestão ou fazê-la de forma compartilhada
            </p>

            <button>Saiba Mais</button>
        </Container>
    )
}

export default IntelligentBackupOn
