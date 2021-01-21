import styled from 'styled-components'



export const Container = styled.div<{
    index?: number
}>`
    overflow: hidden;

    .cards-slider {
        position: relative;
        max-width: 372px;
        margin: 0 auto;
        height: 420px;
    }

    .cards-slider-wrapper {
        display: flex;
        position: absolute;
        transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

        .card {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            min-width: 340px;
            opacity: 0.5;
            transform: scale(0.7);
            transition: opacity 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    
            h1 {
                text-align: center;
                font-weight: 400;
                line-height: 1.6rem;
            }
        }
    }

    .cards-slider.active-slide-${props => props.index} #card-${props => props.index} {
        opacity: 1;
        transform: scale(1);
    }
`