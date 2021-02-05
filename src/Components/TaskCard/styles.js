import styled from 'styled-components';

export const Container = styled.div`
width: 270px;
height: 195px;
box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
border-radius: 10px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

cursor:pointer;
transition: all 0.3s ease;
margin: 15px ;

&:hover{
   
    transform: scale(1.1);
    box-shadow: 0 4 30px rgba(0, 0, 0, 0.2);
    opacity: 0.5;
}
   

`

export const TopCard = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`


export const BottomCard = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

strong{
    color: #EE6B26;
    font-weight: bold;
}
span{
    color: #707070;
}

`





