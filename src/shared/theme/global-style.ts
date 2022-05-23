import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyle = createGlobalStyle<ThemeType>`

  #fixed-modal-container {
    pointer-events: none;
    position: fixed; 
    z-index: 999;
    top: 0; 
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  #fixed-modal {
    pointer-events: none;
    position: relative; 
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
  }

  * {
    pointer-events: inherit;
    transition: background-color 0.2s;
    font-size: 14px;
    font-weight: 500;
    font-family: 'IBM Plex Sans', monospace,sans-serif;
  }
  
  html {
    background-color: ${(p) => p.theme.bg.default};
    color: ${(p) => p.theme.text.default};
  }
  
  body {
    overflow-y: scroll;
  }
  
/* 
  body::-webkit-scrollbar {
    width: 17px;
  }
 
  body::-webkit-scrollbar-thumb {
    background-color: #00000033;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: #00000055;
  } 
*/

  ::-moz-selection {
    /* Code for Firefox */
  }
  ::selection {
  }
  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
  }
`;
