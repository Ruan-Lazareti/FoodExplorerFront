import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: none;

    border: none;
    outline: none;

    > svg {
        margin-right: 1.1rem;
    }
`