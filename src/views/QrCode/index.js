import React, {useState} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './style';
import Qr from 'qrcode.react';
import {Redirect} from 'react-router-dom';

function QrCode(){

const [mac , setMac] = useState();
const [redirect, setRedirect] = useState(false);


async function SaveMac(){
  if(!mac)
  alert('this field cannot be empty');
  else{
  await localStorage.setItem('@todo/macaddress', mac);
  setRedirect(true);
  window.location.reload();
  }
}

    return (
      <S.Container>
           <S.GlobalStyle/>
        {redirect && <Redirect to="/"/>}
        <Header/>
        <S.Content>
          <h1>Capture the Qrcode by the APP</h1>
          <p>Synchronizing your activities with your smartpone</p>
          <S.QrCodeArea>
            <Qr value='getmacaddress' size={350}/>
          </S.QrCodeArea>
          <S.ValidationCode>
            <span>type the number shown on your smartphone.</span>
            <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
            <button type="button" onClick={SaveMac}>Synchronize</button>
          </S.ValidationCode>
         
        </S.Content>
        <Footer/>
           
      </S.Container>

    )
}

export default QrCode;