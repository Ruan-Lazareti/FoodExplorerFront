import styled from 'styled-components'

export const Container = styled.button`

    width: 25.2rem;
    height: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2.5rem;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_900};

    position: relative;

    transition: all 0.2s;

    >img {
        width: 20rem;
        height: 20rem;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size:1.8rem;

        color: ${({ theme }) => theme.COLORS.WHITE};

        text-align: center;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:1.2rem;

        text-align: center;

        opacity: 0.75;
    }

    >h2 {

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:3.2rem;
        line-height:160%;

        text-align: center;

    }

    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        
        gap: 2rem;

        span {
            color: ${({ theme }) => theme.COLORS.WHITE};
    
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1.7rem;
        }
    }

    &&:hover {
        scale: 1.05;
    }
    
`

export const FavIcon = styled.button`
    width: 40px;
    height: 40px;

    background: none;
    border: none;

    position: absolute;

    top: 0;
    right: 0;

    >svg {
        color: #fff;
        font-size: 2rem;
    }

    &&:active {

        >svg {
            color: ${({ theme }) => theme.COLORS.RED};
        }
    }

`
export const MinusIcon = styled.button`
    width: 20px;
    height: 20px;

    background: none;
    border: none;

    >svg {
        color: #fff;
    }

    &&:active {

        >svg {
            scale: 1.5;
        }
    }

`
export const PlusIcon = styled.button`
    width: 20px;
    height: 20px;

    background: none;
    border: none;

    >svg {
        color: #fff;
    }

    &&:active {

        >svg {
            scale: 1.5;
        }
    }

`