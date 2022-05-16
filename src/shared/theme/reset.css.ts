import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;

    transition: background-color 0.2s;
  }
  html {
    /*overflow-y: overlay; */
    display: flex;
    min-height: 100%;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.2px;
    line-height: 1.15;
    background-color: ${(props: any) => props.theme.bg.default};
    color: ${(props: any) => props.theme.text.default};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: sans-serif;
  }
  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
  }

  body::-webkit-scrollbar {
    width: 16px;
  }
 
  body::-webkit-scrollbar-thumb {
    background-color: #00000033;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: #00000055;
  }

  #root {
    height: 100%;
    width: 100%;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  textarea {
    resize: none;
  }
  ::-moz-selection {
    /* Code for Firefox */
    background: ${(props) => props.theme.brand.alt};
    color: ${(props) => props.theme.text.reverse};
  }
  ::selection {
    background: ${(props) => props.theme.brand.alt};
    color: ${(props) => props.theme.text.reverse};
  }
  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: ${(props) => props.theme.text.placeholder};
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: ${(props) => props.theme.text.placeholder};
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${(props) => props.theme.text.placeholder};
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.text.placeholder};
  }
`;
