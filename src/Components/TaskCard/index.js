import React from 'react';

import * as S from './styles'

import iconDefault from '../../assets/default.png'

function TaskCard() {
  return (
    <S.Container>

   <S.TopCard>
   <img src={iconDefault} alt="Task icon"/>
   <h3>Task Title</h3>
   </S.TopCard>
   <S.BottomCard>
       <strong>04/02/2021</strong>
       <span>19:05</span>
   </S.BottomCard>
   
    </S.Container>
  )

}

export default TaskCard;
