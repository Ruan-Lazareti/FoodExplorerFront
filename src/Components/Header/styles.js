import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 2.4rem 12.0rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    gap: 10rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};

    grid-area: header;

    > div {
        display: flex;
        gap: 1rem;
    }

    #mobile {
        display: none;
    }

    .logo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: end;

        h1 {
            white-space: nowrap;
            font-weight: 700;
            font-size: 2.4rem;
        }
    
        h2 {
            font-weight: 400;
            font-size: 1.2rem;
        }
    }

    .button-wrapper{
        width: 30rem;
    }

    .hidden{
        display: none;
    }

    grid-area: header;

    @media (max-width: 1040px) {
        .button-wrapper{
            width: 100%;

            margin: 0;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        #mobile {
            display: block;

            >button {
                background-color: transparent;
                border-style: none;
            }
        }

        #desktop {
            display: none;
        }

        gap: 4rem;
        
    }
`

export const LogOut = styled.button`
    width: 20px;

    background: none;
    border: none;

`