import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: top;
    justify-content:flex-start;

    padding: 2rem 0;

    background: transparent;

    border: none;

    font-family: 'Poppins';

    color: ${({ theme }) => theme.COLORS.WHITE};

    gap: 1rem;

    > img {
        width: 10rem;
        height: 10rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h1 {
            margin-bottom: 1rem;

            font-style: normal;
            font-weight: 500;
            font-size: 2rem;
            line-height: 160%;
        }

        button {
            background: none;
            border: none;

            color: ${({ theme }) => theme.COLORS.RED};
        }
    }

    >h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.WHITE};

        filter: brightness(.65);

        margin-top: 1rem;
    }
`