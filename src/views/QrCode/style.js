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
height: 400px;
background: #290502


`