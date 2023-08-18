import styled from 'styled-components'

export const Container = styled.div`
    width: 15rem;
    height: 35px;

    display: flex;
    align-items: center;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GREY_TEXT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GREY_TEXT}` : "none"};
    border-radius: 10px;
    padding: 0 16px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    > button { 
        border: none;
        background: none;
    }
    .button-delete {
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
    }
    > input { 
        width: 100%;
        height: 56px;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GREY_TEXT};
        }
    }
`