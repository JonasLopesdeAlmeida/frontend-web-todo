import React,{useEffect, useState} from 'react';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';
import {Link} from 'react-router-dom';
import api  from '../../services/api'


function Header({clickNotification}) {
  
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/11-11-11-11-11-12`)
    
    .then(response => {
       setLateCount(response.data.length)
    
    })
  }
  useEffect(()=>{
   lateVerify();
  })
  
  
  return (
    <S.Container >
      <S.LeftSide>
      <img src={logo} alt="Logo"/>
      </S.LeftSide>

      <S.RightSide>
      <Link to="/">HOME</Link>
      <span className="divider"></span>
      <Link to="/task">NEW TASK</Link>
      <span className="divider"></span>
      <Link to="/qrcode">SYNCHRONIZE MOBILE</Link>
      {
        lateCount &&
      <>
      <span className="divider"></span>
      <button onClick={clickNotification} id="notification">
      <img src={bell} alt="Notification"/>
      <span>{lateCount}</span>

      </button>
      </>
      }
      </S.RightSide>
    </S.Container>
  )

}

export default Header;
