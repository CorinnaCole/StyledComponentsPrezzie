import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 350px;
        font-family: font-family: 'Anton', sans-serif;
        display: flex;
        background-color: ${({theme})=> theme.body};
    }
`

// const GlobalStyle = createGlobalStyle`
//     body {
//         margin: 300px;
//         font-family: font-family: 'Anton', sans-serif;
//         display: flex;
//         background-color: teal;
//         align-items: center;
//         justify-items: center;
//     }
// `
export default GlobalStyle;