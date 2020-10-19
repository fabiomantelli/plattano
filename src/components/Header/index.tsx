import React from 'react'

import Row from '../../styles/Row'
import Column from '../../styles/Column'

import Navbar from '../Navbar'
import Hamburguer from '../Hamburguer'
import MobileMenu from '../MobileMenu'

import PlattanoLogo from '../../assets/plattano/plattanoLogo'

interface IHeader {
    active: string
    click: () => void
}

const Header: React.FC<IHeader> = props => {
    return (
        <>
            <Row zIndex={300}>
                <Column
                    size={1}
                    maxWidth={414.67}
                    marginLeft={2}
                    marginRight={2}
                >
                    <PlattanoLogo />
                </Column>
                <Column
                    size={3}
                    collapse="desktopOff"
                    maxWidth={829.33}
                    paddingLeft={2}
                    paddingRight={2}
                    marginRight={2}
                >
                    <Navbar />
                </Column>

                <Column size={1} marginRight={2} collapse="mobileOff">
                    <Hamburguer click={props.click} isActive={props.active} />
                    <MobileMenu isActive={props.active} click={props.click} />
                </Column>
            </Row>
        </>
    )
}

export default Header
