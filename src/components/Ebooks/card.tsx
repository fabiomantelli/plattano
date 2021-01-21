import React from 'react'
import { ButtonElement } from '../../styles/Buttons'

interface IProperty {
    index: number;
    image: string;
    text: string;
    link: string;
}

const Card: React.FC<IProperty> = props => {
    return (
        <div id={`card-${props.index}`} className="card">
            <img src={props.image} alt={`Documento-${props.index}`} />
            <h1>{props.text}</h1>
            <ButtonElement>
                <a
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ 
                        textDecoration: 'none', 
                        color: '#fff', 
                        cursor: 'pointer'
                    }}
                >Download</a>
            </ButtonElement>
        </div>
    )
}

export default Card