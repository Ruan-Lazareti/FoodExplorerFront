import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};
    display: flex;
    align-items: center;
    gap: 1.2rem;
    
    border-radius: 10px;

    input:focus{
            outline: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
        }
    
    >input {
        width: 100%;
        height: 5.6rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
    
        border:none;
        padding: 1.9rem 2.4rem;
        border-radius: 10px;
        
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GREY_TEXT}
        }
    }
    > svg {
        margin-left: 16px;
    }  
`