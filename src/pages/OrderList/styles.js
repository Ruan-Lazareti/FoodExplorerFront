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

    min-height: 100vh
`

export const Content = styled.div`
    grid-area: content ;

    padding:0 12rem;

    width: 100%;

    > header {
        display: flex;
        justify-content: space-between;

        margin: 3rem 0;


        h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 140%;
        }
    }

    >main {
        margin-bottom: 20rem;
    }

    @media (max-width: 1040px) {        
        padding:0 5rem;
    }
`

export const HeaderButton = styled.button`
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: left;

    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;

    >svg {
        color: #fff;
    }
`