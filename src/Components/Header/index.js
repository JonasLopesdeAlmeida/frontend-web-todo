import React,{useEffect, useState} from 'react';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';
import {Link} from 'react-router-dom';
import api  from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({clickNotification}) {
  
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/${isConnected}`)
    
    .then(response => {
       setLateCount(response.data.length)
    
    })
  }
  useEffect(()=>{
   lateVerify();
  })

  async function Logout(){
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }
  
  
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

      {!isConnected ?
      <Link to="/qrcode">SYNCHRONIZE MOBILE</Link>
      :
      <button type="button" onClick={Logout}>LOGOUT</button>
      }

      {
        lateCount !== 0 ?
      <>
      <span className="divider"></span>
      <button onClick={clickNotification} id="notification">
      <img src={bell} alt="Notification"/>
      <span>{lateCount}</span>

      </button>
      </>
      :
      null
      }
      </S.RightSide>
    </S.Container>
  )

}

export default Header;
