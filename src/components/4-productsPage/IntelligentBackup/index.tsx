import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const IntelligentBackup: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>Intelligent Backup Cloud</h1>
            <h2>Faça seus backups Veeam localmente ou em cloud.</h2>
            <p>
                Como parceira{' '}
                <span>
                    <b>Veeam Cloud Service Provider</b>
                </span>
                , podemos oferecer com toda a segurança e confiabilidade,
                serviços de proteção de dados local e em <b>nuvem (BaaS)</b>.
                Nossa equipe é certificada nas versões atuais da ferramenta, e
                treinada para gerenciar ambientes internos e em nuvem.
            </p>
            <p>
                Vamos ser objetivos? Quem quer construir e manter um site
                secundário, quando se pode enviar seus backups para um ambiente
                externo num provedor de serviços confiável. Deixe que os
                especialistas e engenheiros Veeam da <b>Pláttano</b> o construam
                e o gerenciem.
            </p>
            <button>Saiba Mais</button>
        </Container>
    )
}

export default IntelligentBackup
