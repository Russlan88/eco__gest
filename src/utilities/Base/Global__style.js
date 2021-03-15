import { createGlobalStyle } from 'styled-components';
import { grayBg, whiteColor } from './Colors';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        background: ${grayBg};
    }

    .container {
        max-width: 1170px;
        margin: 0 auto;

        h1 {
            color: ${whiteColor};
            text-align: center;
        }

        input {
            width: 500px;
            margin: 0 auto;
            display: block;
            border: none;
            height: 50px;
            text-align: center;
        }
    }
`;

