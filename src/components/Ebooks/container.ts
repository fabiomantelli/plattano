import styled from 'styled-components'



export const Container = styled.div<{
    index?: number
}>`
    height: 70vh;

    .cards-slider {
        position: relative;
        max-width: 372px;
        margin: 0 auto;
     
        &:before {
         content: '';
         display: block;
         width: 100%;
         height: 420px;
         outline: 2px solid ${props => props.theme.colors.primary};
         position: absolute;
         top: 0;
         left: 0;
         }
    }

    .cards-slider-wrapper {
        display: flex;
        position: absolute;
        transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .card {
        flex: 1;
        min-width: 340px;
        padding: 10px;
        margin-right: 35px;
        opacity: 0.5;
        transform: scale(0.7);
        transition: opacity 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }


    h1 {
        font-weight: 400;
        line-height: 1.6rem;
    }

    .cards-slider.active-slide-${props => props.index} #card-${props => props.index} {
        opacity: 1;
        transform: scale(1);
        
    }
`