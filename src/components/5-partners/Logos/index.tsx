import React from 'react'
import AdistecLogo from '../../../assets/5-parners/adistecLogo/adistecLogo'
import SynnexLogo from '../../../assets/5-parners/synnexLogo/synnexLogo'
import VeeamLogo from '../../../assets/5-parners/veeamLogo/veeamLogo'
import VmwareLogo from '../../../assets/5-parners/vmwareLogo/vmwareLogo'

import { Container } from './styles'

const Logos: React.FC = () => {
    return (
        <Container>
            <VmwareLogo />
            <VeeamLogo />
            <SynnexLogo />
            <AdistecLogo />
        </Container>
    )
}

export default Logos
