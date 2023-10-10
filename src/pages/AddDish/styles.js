import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    grid-template-rows: 
    12.4rem,
    auto, 
    12.4rem;
    grid-template-areas:
    'header'
    'content'
    'footer';

    height: 100vh;

    @media (max-width: 700px) {
        height: 100vh
    }
`
export const Content = styled.div`

    padding: 2.5rem 12rem 12.5rem;

    @media (max-width: 700px) {
        padding: 2.5rem 5rem 4rem;

        width: 100vh
    }
`

export const Form = styled.form`

    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;

        margin:3.2rem 0;
    }

    @media (max-width: 700px) {
        padding: 2.5rem 5rem 4rem;
    }
`

export const HeaderButton = styled.button`
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: left;

    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;

    >svg {
        color: #fff;
    }
`

export const Textarea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: baseline;

    width: 100%;
    font-family: 'Roboto';
    
    > label {
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        opacity: 0.65;

        margin-bottom: 1.5rem;
    }

    > textarea {
        width: 100%;
        height: 20rem;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        padding: 1.9rem 2.4rem;

        resize: none; 
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN_900};

        
        border-radius: 10px;

        color: ${({ theme }) => theme.COLORS.WHITE};

    }
`
export const Section = styled.div`
        display:flex;
        align-items: center;
        justify-content: end;
        gap: 3rem;

        width: 100%;

        @media (max-width: 700px) {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            gap: 0;
        }
`
export const InputFile = styled.div`
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding: 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        border-radius: 10px;

        width: 100%;

        input:focus{
            outline: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
        }

       > #label-picture {
            cursor: pointer;

            display: flex;
            align-items: center;
            margin-bottom: 0;
        }

        input {
            display: none;
        }       
`

export const ShorterInput = styled.div`
    width: 35%;

    display: flex;
    flex-direction: column;
    align-items: left;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    margin-bottom: 5rem;

    label { 
        opacity: 0.65;

        margin-bottom: 1.5rem;
    }

    > select {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN_900};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        padding: 1.6rem;

        border-radius: 10px;
        border: none;

        width: 100%;

        input:focus{
            outline: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
        } 
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`
export const BiggerInput = styled.div`
    width: 65%;

    display: flex;
    flex-direction: column;
    align-items: left;

    margin-bottom: 5rem;

    color: ${({ theme }) => theme.COLORS.WHITE}; 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    > div  {
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        border-radius: 10px;
    }

    > label, span { 
        opacity: 0.65;

        margin-bottom: 1.5rem;
    }

    .text-area {
        flex-direction: column;

        width: 100%;
        
    }

    #ingredients-section{
        padding: 1rem;
        justify-content: start;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN_900};
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`

export const FormButton = styled.button`
    width:40%;
    padding: 1.5rem;
    
    margin-top: 3rem;

    background: rgba(255, 255, 255, 0.1);

    border: none;
    border-radius: 10px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    transition: all 0.2s;

    button:hover {
        filter: brightness(1.1)
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`