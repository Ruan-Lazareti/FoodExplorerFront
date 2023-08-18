import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Roboto', sans-serif;
    }

    :root {
        font-size: 62.5%
    }

    body {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_800};
        color: ${({ theme }) => theme.COLORS.WHITE} ;
    }

    button, span, input {
        font-family:'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none; 
    }

    a { 
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(1.1);
    }

    button:disabled {
        cursor: disabled;
    }
`