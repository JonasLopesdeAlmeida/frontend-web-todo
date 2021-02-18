import React , {useMemo} from 'react';

import * as S from './styles';
import typeIcons from '../../utils/typeicons';

import { format } from 'date-fns';

function TaskCard({type, title, when, done}) {
const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy') );
const hour = useMemo(() => format(new Date(when), 'HH:mm') );

  return (
    <S.Container done={done}>

   <S.TopCard>
   <img src={typeIcons[type]} alt="Task icon"/>
   <h3>{title}</h3>
   </S.TopCard>

   <S.MiddleCard>
   <span>{done === true ? 'Done!' : null}</span>
   </S.MiddleCard>

   <S.BottomCard>
       <strong>{date}</strong>
       <span>{hour}</span>
   </S.BottomCard>
   
    </S.Container>
  )

}

export default TaskCard;
