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
export const Form = styled.div`
width: 50%;
margin-bottom: 70px;




`
export const TypeIcons = styled.div`
width: 100%;
display: flex;
justify-content: center;

.inative{
    opacity: 0.5;
}

button{
    border: none;
    background: none;
}

img{
    width: 55px;
    height: 55px;
    margin: 10px;
    margin-top: 30px;
    cursor: pointer;
    
    
    &:hover{
   transform: scale(1.1);
   box-shadow: 0 4 30px rgba(0, 0, 0, 0.5);
   opacity: 0.5;
}
  
    
}

`
export const Input = styled.div`

width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;



img{
    width: 20px;
    height: 20px;
    position: relative;
    left: 95%;
    bottom: 30px;

}


span{
    color: #20295F;
    margin-top:20px;
    margin: 5px 0;

}

input{

    font-size: 16px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #EE6B26;
}

`

export const TextArea = styled.div`

width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;


span{
    color: #20295F;
    margin: 5px 0;

}

textarea{

    font-size: 16px;
    border:  1px solid #EE6B26;
    border-radius: 5px;
}



`
export const Options = styled.div`

display: flex;
justify-content: space-between;


button{

    font-weight: bold;
    color: #fff;
    border: none;
    background: linear-gradient(150deg, #20295F, #3949db 100%);
    border-radius: 20px;
    padding: 5px 15px;
    cursor: pointer;
    
     &:hover{
         opacity: 0.5;
     }


}


div{
    display: flex;
    align-items: center;
    color: #ee6b26;
    font-weight: bold;
 

}


`

export const Save = styled.div`

width: 100%;
margin-top: 20px;
display: flex;
justify-content: center;

button{
width: 100%;
font-weight: bold;
font-size: 20px;
color: #fff;
background: linear-gradient(150deg, #ee6b26, #3949db 100%);
border: none;
border-radius: 25px;
padding: 15px 15px;
cursor: pointer;

 &:hover{
    opacity: 0.7;
 }


}

`

