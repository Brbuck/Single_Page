import  { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  html {
    min-height: 100%;
    background: var(--color-white);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  
  :root{
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
`;

