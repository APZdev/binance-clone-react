import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`

  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html {
    display: flex;
    min-height: 100%;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.15;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      overscroll-behavior-y: none;
      -webkit-overflow-scrolling: touch;
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
`;
