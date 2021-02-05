import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './styles';

import api from '../../services/api';
import TypeIcons from '../../utils/typeicons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
 
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();



 async function lateVerify(){
  await api.get(`/task/filter/late/11-11-11-11-11-12`)
  .then(response => {
     setLateCount(response.data.length)
  })
}



 useEffect(()=>{
   lateVerify();
 }, [])

  return (
   
  <S.Container>
   <S.GlobalStyle/>
   <Header lateCount={lateCount}  />

   <S.Form>
       <S.TypeIcons>
      {
          TypeIcons.map((icon, index) => (
             index > 0 && 
             <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Type icons"
                className={type && type != index && 'inative'}
             /> 
             </button>
          ))
      }
       </S.TypeIcons>

      <S.Input>
          <span>Title</span>
          <input type="text" placeholder="type a task title..."></input>
      </S.Input>

      
      <S.TextArea>
          <span>Description</span>
          <textarea rows={5} type="text" placeholder="task details..."></textarea>
      </S.TextArea>


      <S.Input>
          <span>Date</span>
          <input type="date" placeholder="type a date..."></input>
          <img src={iconCalendar} alt="calendar"/>
      </S.Input>

     
      <S.Input>
          <span>Hour</span>
          <input type="time" placeholder="type a hour..."></input>
          <img src={iconClock} alt="clock"/>
      </S.Input>

      <S.Options>
          <div>
              <input type="checkbox"/>
              <span>COMPLETED</span>
          </div>
          <button type="button">DELETE</button>

      </S.Options>


      <S.Save>

      <button type="button">SAVE</button>

      </S.Save>

    </S.Form>   

   <Footer/>
 
  </S.Container>
  
  
  
  )
}

export default Task;
