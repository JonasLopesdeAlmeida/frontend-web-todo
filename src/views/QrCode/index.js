import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './style';

function QrCode(){

    return (
      <S.Container>
           <S.GlobalStyle/>
        <Header/>
        <S.Content>
          <h1>Capture the Qrcode by the APP</h1>
          <S.QrCodeArea></S.QrCodeArea>
          <p>Synchronizing your activities with your smartpone</p>
        </S.Content>
        <Footer/>
           
      </S.Container>

    )
}

export default QrCode;