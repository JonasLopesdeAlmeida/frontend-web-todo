import React from 'react';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';
import {Link} from 'react-router-dom';

function Header({lateCount, clickNotification}) {
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
      <a href="#">SYNCHRONIZE MOBILE</a>
      <span className="divider"></span>
      <button onClick={clickNotification} id="notification">
      <img src={bell} alt="Notification"/>
      <span>{lateCount}</span>

      </button>
      </S.RightSide>
    </S.Container>
  )

}

export default Header;
