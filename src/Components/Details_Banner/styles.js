import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 0 13.1rem;

    grid-area: content;

    margin-bottom: 18rem;

    > header {
        padding: 2.4rem ;

        button {
            text-align: right;
            width: 100%;
        }
    }

    @media (max-width: 1040px) {
        padding: 0 7.5rem;
    }
`

export const Content = styled.div`
    width: 100%;
    
    display:flex;

    margin-top: 5rem;

    gap: 4rem;

    .hidden {
        display: none;
    }
    
    > img {
        width: 54rem;
        max-height: 54rem;
        opacity: .7;
    }

    > div  {
        height: 100%;
        
        display: flex;
        flex-direction: column;

        margin-top: 6rem;
        
        h1, h3, h5 {
            font-family: 'Poppins', sans-serif;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }

        h1 {
            font-weight: 500;
            font-size: 4rem;
        }
        
        h3 {
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 3.3rem;
            
            filter: brightness(0.8);
            
            margin-top: 3rem;
        }
    }

    @media (max-width: 700px) {
        display: flex;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        > img {
            width: 25rem;
            height: 25rem;
        }

        > div {
            align-items: center;
            justify-content: center;
            margin-top: 0;
            max-width: 50.0rem;

            h1 {
            font-weight: 500;
            font-size: 2.7rem;
        }
        
        h3 {
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 140%;
            text-align: justify;
            
            filter: brightness(0.8);
            
            margin-top: 2rem;
        }

        #buttons {
            justify-content: center;
            width: 700px;
        }
        }
    }
`

export const IngredientsWrapper = styled.div`
    display:flex;
    justify-content: left;

    gap: 0.8rem;

    margin-top: 2.5rem;
`
export const ButtonWrapper = styled.div`
    width: 100%;
    
    display:flex;
    align-items: center;
    gap: 2rem;

    margin-top: 6rem;

    > .ingredients-btn {
        width: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        gap: 2rem;

        margin-top: 1rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        line-height: 2.4rem;

        color: ${({ theme }) => theme.COLORS.WHITE};

        background-color: ${({ theme }) => theme.COLORS.RED};

        border: none;
        outline: none;

        padding: .5rem 0;

        border-radius: 5px;

        @media (max-width: 1040px) {
            img {
                width: 20px;
                height: 20px;
            }
        }
    }

    > h2 {
        width: 130px;

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 3.2rem;
        line-height: 160%;
    }

    > div {
        width: 50%;
    }

    @media (max-width: 1040px) {
        gap: 1rem;

        h2 {
            font-size: 3rem;
        }

        > div {   
            width: 46%
        }
    }

`

export const IngredientCard = styled.div`
    width: 100%;
    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: .8rem;

    > img {
        width: 6rem;
        height: 6rem;
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
export const HeaderButton = styled.button`
    width: 100%;

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