import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


body{
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
padding: 0;
margin: 0;  
font-family:'Roboto', sans-serif;
}


`

export const Container = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;


`


export const Content = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;

h1{
    color:#EE6B26;
}
p{
    color:#20295f;
}

`


export const QrCodeArea = styled.div`

width: 100%;
display: flex;
justify-content: center;


`
export const ValidationCode = styled.div`
display: flex;
flex-direction: column;
margin: 10px;

span{
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 10px;
}
input{
  font-size: 18px;
  padding: 10px; 
  text-align: center; 
  border:  1px solid #EE6B26;
  border-radius: 5px;
}

button{
font-weight: bold;
font-size: 18px;
color: #fff;
background: linear-gradient(150deg, #ee6b26, #3949db 100%);
border: none;
border-radius: 30px;
padding: 10px;
margin-top: 10px;
cursor: pointer;

 &:hover{
    opacity: 0.7;
 }
}

`


