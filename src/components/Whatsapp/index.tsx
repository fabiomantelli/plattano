import React from 'react'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container } from './styles'

const Whatsapp: React.FC = () => {
    return (
            <Container>
                <a
                href="https://wa.me/5548999610729?text=Gostaria%20de%20obter%20mais%20informações%20sobre%20os%20produtos%20e%20serviços%20da%20Pláttano%20Technologies."
                target="_blank"
                rel="noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '30px'
                }}
            >
                <FontAwesomeIcon
                    icon={faWhatsappSquare}
                    size="4x"
                    style={{
                        color: '#25D366'
                    }}
                />
            </a>
            </Container>
    )
}

export default Whatsapp