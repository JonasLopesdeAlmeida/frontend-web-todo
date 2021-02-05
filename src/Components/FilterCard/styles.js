import styled from 'styled-components';

export const Container = styled.div`
width: 250px;
height: 50px;
background: ${props => props.actived ? '#EE6B26' : '#3949db'};
border-radius: 5px;
padding: 10px;
cursor: pointer;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
justify-content: space-around;


img{
    width: 25px;
    height: 25px;
}
span{
    
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    font-size: 15px;

}

&:hover{
    background-color: #EE6B26;
    transform: scale(1.1);
    box-shadow: 0 4 30px rgba(0, 0, 0, 0.2);
}


   

`





