import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 22px;
  }
  
  body {
    min-height: 100vh;
    width:100%;
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
form{
    margin: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }  
}
input{
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    @media (max-width: 768px) {
        margin: 15px 0;
      }  
}
h1{
    color: #264653;
    text-align: center;
    @media (max-width: 768px) {
        margin: 25px;    
      }  
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
    padding:0 25px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 15px;
}
a{
    text-decoration: none;
    color: black;
    
}
.userInfoCard {
    padding: 5px;
    border: 1px solid #eaeaea;
    margin-right: 20px;
}

`;
