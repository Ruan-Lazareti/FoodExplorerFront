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

    h1 {
        white-space: nowrap;
        font-weight: 700;
        font-size: 2.4rem;
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

    @media (max-width: 900px) {
        
        gap: 4rem;
        
    }
`

export const LogOut = styled.button`
    width: 20px;

    background: none;
    border: none;

`