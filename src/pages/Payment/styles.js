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

    .hide{
        display:none;
    }

    @media (max-width: 1040px) {
        height: 100vh
    }
`
export const Content = styled.div`
    grid-area: content;

    display: flex;
    justify-content: space-between;

    padding: 2.5rem 12rem 12.5rem;

    min-height: 100vh;

    @media (max-width: 1040px) {
        padding: 2.5rem 5rem 4rem;

        width: 100vh
    }
`
export const ButtonWrapper = styled.div`
    display: flex;

    font-family: 'Roboto';

    >button {
        background: none;
        padding: 3.2rem 10rem;

        display: flex;
        align-items: center;
        gap: .8rem;

        border: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};

        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
    }

    > #first-child {
        border-top-right-radius: 10px;
    }

    .selected {
        background-color: rgba(255, 255, 255, 0.05);
    }
`
export const Section = styled.div`
    display: flex;
    flex-direction: column;

    font-family: 'Poppins';

    > h1{
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;

        margin-bottom: 6rem;
    }

    > h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;

        margin-top: 2rem;
    }
`

export const PaymentBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5rem 0;

    border: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
`

export const Form = styled.form`
    width: 90%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;

    padding: 0 3rem;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 2.4rem;
    }

    > div {
        display: flex;
        justify-content: space-between;

        width: 100%;
    }

    >label {
        width: 100%;
        margin-bottom: 1rem;

        color: ${({ theme }) => theme.COLORS.WHITE}
    };
`

export const PaymentStatus = styled.div`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5rem;

    > img, h1 {
        filter: brightness(0.7)
    }

`