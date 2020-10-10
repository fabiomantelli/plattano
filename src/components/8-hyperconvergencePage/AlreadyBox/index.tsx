import React from 'react'
import AlreadyBoxIcon from '../../../assets/8-hyperconvergence/alreadybox/alreadyboxIcon'

import { Container } from './styles'

const AlreadyBox: React.FC = () => {
    return (
        <>
            <Container>
                <AlreadyBoxIcon />
                <div>
                    <h1>Pronto para a nuvem</h1>
                    <p>
                        Use a HCI em qualquer lugar com o ecossistema mais amplo
                        do setor: 18 fabricantes de servidores OEM e serviços
                        nativos com as maiores nuvens públicas, como AWS, Azure,
                        Google Cloud, Oracle Cloud, IBM Cloud e Alibaba Cloud.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default AlreadyBox
