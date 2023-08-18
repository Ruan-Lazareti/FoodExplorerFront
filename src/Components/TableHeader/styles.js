import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    width: 100%;

    grid-template-columns: 1fr 1fr 4fr 1fr;

    > div {
        display: flex;
        align-items: center;
        justify-content: left;

        border: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 2rem;

        text-align: left;

        h1 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 160%;
        }
    }

    #first-child{
        border-top-left-radius: 10px;
    }

    #last-child{
        border-top-right-radius: 10px;
    }

    @media (max-width: 900px){
        
        #first-child{
            border-top-left-radius: 10px;
            padding-right: 34px;
        }
    }
`