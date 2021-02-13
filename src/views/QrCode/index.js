import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './style';
import Qr from 'qrcode.react';

function QrCode(){

    return (
      <S.Container>
           <S.GlobalStyle/>
        <Header/>
        <S.Content>
          <h1>Capture the Qrcode by the APP</h1>
          <p>Synchronizing your activities with your smartpone</p>
          <S.QrCodeArea>
            <Qr value='getmacaddress' size={350}/>
          </S.QrCodeArea>
          <S.ValidationCode>
            <span>type the number shown on your smartphone.</span>
            <input type="text"/>
            <button type="button">Sincronize</button>
          </S.ValidationCode>
         
        </S.Content>
        <Footer/>
           
      </S.Container>

    )
}

export default QrCode;