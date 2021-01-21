import React, { useState } from 'react'
import { ArrowLeft } from './arrow-left'
import { ArrowRight } from './arrow-right'
import Card from './card'
import data from '../../data/data'

import { Container } from './container'

const Ebooks: React.FC = () => {
    const [ property, setProperty ] = useState(data.properties[1])

    const nextProperty = () => {
        const newIndex = property.index + 1
        setProperty(data.properties[newIndex])
    }

    const prevProperty = () => {
        const newIndex = property.index - 1
        setProperty(data.properties[newIndex])
    }

    return (
            <Container index={property.index}>
                <button 
                    style={{ 
                        all: 'unset', 
                        cursor: 'pointer',
                        position: 'relative',
                        // top: '50%',
                        left: 0,
                        zIndex: 23422
                    }}
                    onClick={() => prevProperty()}
                    disabled={property.index === 0}
                    >
                    <ArrowLeft style={{ margin: '10px' }} />
                </button>

                <button 
                style={{ 
                    all: 'unset', 
                    cursor: 'pointer',
                    position: 'relative',
                    // top: '50%',
                    left: 'calc(100% - 80px)',
                    zIndex: 23422
                }}
                onClick={() => nextProperty()}
                disabled={property.index === data.properties.length-1}
                >
                    <ArrowRight style={{ margin: '10px' }} />
                </button>

                <div className={`cards-slider active-slide-${property.index}`}>
                        <div className="cards-slider-wrapper" style={{ 
                            'transform': `translateX(-${property.index*(100/data.properties.length)}%)`
                        }}>
                            {
                                data.properties.map(property => <Card key={property._id} index={property.index} image={property.image} link={property.link} text={property.text} />)
                            }
                        </div>
                    
                </div>

                
            </Container>
           
    )
}

export default Ebooks