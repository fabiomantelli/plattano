import React from 'react'

import { Container } from './styles'

const Infrastructure2: React.FC = () => {
    return (
        <Container>
            <p>
                Com a hiperconvergência, todas as funções essenciais do
                datacenter são executadas em uma camada de software altamente
                integrada em vez de serem executadas em um hardware projetado
                para fins específicos. HCI consiste de três componentes de
                software: virtualização de processamento,{' '}
                <b>virtualização de armazenamento e gerenciamento</b>. O
                software de virtualização faz a abstração e criação de pools de
                recursos subjacentes e os aloca dinamicamente a aplicativos
                executados em VMs ou em contêineres
            </p>
        </Container>
    )
}

export default Infrastructure2
