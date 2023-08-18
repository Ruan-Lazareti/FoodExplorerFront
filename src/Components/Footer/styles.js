import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 3.5rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};

    grid-area: footer;

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
    }

    > .end {
      
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
        }
    }

    >span, a {
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
    }

    @media (max-width: 900px) {
        padding: 2rem;

        > div {
            display: flex;
            align-items: center;
            gap: .5rem;

            color: ${({ theme }) => theme.COLORS.GREY_TEXT};

            font-size: 1rem;
        }

        >span {
            color: ${({ theme }) => theme.COLORS.GREY_TEXT};
            font-size: 1.5rem;
        }
    }


`