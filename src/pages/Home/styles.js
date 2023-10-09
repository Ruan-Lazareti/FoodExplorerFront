import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    grid-template-rows: 
    12.4rem,
    auto, 
    12.4rem;
    grid-template-areas:
    'header'
    'content'
    'footer';
    `

export const Content = styled.div`
    width: 100%;
    max-width: 1400px;
    grid-area: content;

    padding: 3rem 12.4rem;

    margin: 0 auto;

    font-family: 'Poppins', sans-serif;

    > h1 {
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 2.2rem;

        text-align: left;

        width: 100%;

        margin: 5rem 0;

    }

    > .div-input {
        width: 50%;

        margin-top: 4rem;
        margin-bottom: -2rem;
    }

    > .main-dishes {
        display: flex;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 800px;

        padding: 3rem 5rem;
    }
`

export const Banner = styled.div`
    width: 100%;
    height: 26rem;

    display: flex;
    justify-content: space-between;

    margin-top: 13rem;

    background: linear-gradient( to top, ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700} 0%, #072d3b 100% );

    
    > div {
        position: relative;

        > img {
                position: absolute;
    
                bottom: 0;
                left: -55px;
    
                opacity: 0.9;
    
                height: 155%
    }

            
    }

    > .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding-right: 4rem;
        gap: 1rem;

        h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 2.2rem;

            text-align: left;

            width: 100%;
        }

        h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.2rem
        }
    }
`
