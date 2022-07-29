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
    background: #eee2df;
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
    background: #eed7c53d;
    @media (max-width: 768px) {
        margin: 15px 0;
      }  
}
button{
    color: #c97c5d;
    padding: 6px;
    border-radius: 2px;
    border: none;
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
    background: #eed7c53d;
    padding: 15px;
    border: 1px solid #c89f9c;
    border-radius: 5px;
    margin-bottom: 15px;
}




img{
    width:100%;
    border-radius: 5px;
}
a{
    text-decoration: none;
    color: black;
    
}
.userInfoCard {
    background: #eed7c53d;
    padding: 5px;
    border: 1px solid #c89f9c;
    margin-right: 20px;
    border-radius: 5px;
}

`;
