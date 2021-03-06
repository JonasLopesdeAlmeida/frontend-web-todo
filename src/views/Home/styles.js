import styled,{createGlobalStyle} from 'styled-components';

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


`

export const FilterArea = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 30px;


button {

    background: none;
    border: none;
}

`

export const Content = styled.div `
 
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-bottom: 50px;

 a{
     text-decoration: none;
     color: #000;
 }


`

export const Title = styled.div `
 
 width: 100%;
 border-bottom: 1px solid #20295f;
 display: flex;
 justify-content: center;
 margin-bottom:  20px;

 
 h3{

    color: #20295f;
    position: relative;
    top: 30px;
    text-align: center;
    background: #fff;
    padding:0 20px;
 }
 


`

