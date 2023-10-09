import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10.8rem;

    @media (max-width: 920px) {
        padding: 0 5rem;
        display: flex;
    }
`

export const Content = styled.div`

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >div {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        gap: 2rem;

        > h1 {
            width: 100%;
            font-family: 'Roboto', san-serif;
            font-weight: 700;

            font-style: normal;
            font-weight: 700;
            font-size: 4.2rem;
            line-height: 5rem;

            text-align: center;
        }

        @media (max-width: 1200px) {
            gap: 0;

            >img {
                width: 4rem;
                height: 4rem;
            }

            >h1 {
                margin: 0;
                padding: 0;
                
                margin: 0 1rem 0 0.2rem;

                font-size: 3rem;
                line-height: 3.5rem;
            }
        } 

        @media (max-width: 920px) {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            gap: 1rem;

            >h1 {
                margin-top: 1rem;
            }
        }
    }

    @media (max-width: 920px) {
        flex-direction: column;

        margin: -2.5rem 0;

        gap: 3.2rem;

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`
export const Form = styled.form`
    width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    padding: 6.4rem;
    margin: 7rem 0;

    border-radius: 10px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 2.4rem;
    }

    @media (max-width: 1200px) {
        width: 70%;

        margin: 0;
    }

    @media (max-width: 920px) {
        width: 100%;

        > h1 {
            font-size: 2rem;
        }
    }
`
