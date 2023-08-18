import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    width: 100%;

    grid-template-columns: 1fr 1fr 4fr 1fr;

    .pendent {
        background-color: ${({ theme }) => theme.COLORS.RED};
    }

    .preparing{
        background-color: yellow;
    }

    .delivered {
        background-color: green;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: left;

        border: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 1rem;

        span {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 160%;

            opacity: 0.8;
        }
    }

    #first-child{
    }
    
    
    .select-box {
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        position: relative;

        width: 100%;

        > select {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_800};
    
            color: ${({ theme }) => theme.COLORS.WHITE};
    
            padding: 1rem;
    
            border-radius: 5px;
    
            width: 100%;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 160%;

            display: flex;
            align-items: center;

            -webkit-appearance:none;
            &&::-ms-expand{
                display:none;
            }

            &&:focus{
                outline:none;
            }
        }

        img {
            position: absolute;

            top: 35%;
            right: 1.32%;

            margin-right: 1rem;
        }
    }

`