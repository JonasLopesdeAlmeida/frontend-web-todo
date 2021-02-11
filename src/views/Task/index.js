import React, {useState, useEffect, useRef} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './styles';
import {format} from 'date-fns';
import api from '../../services/api';
import TypeIcons from '../../utils/typeicons';
import {Redirect} from 'react-router-dom';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task({match}) {
 
    const [redirect, setRedirect] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11-11-11-11-11-12');





 async function lateVerify(){
  await api.get(`/task/filter/late/11-11-11-11-11-12`)
  .then(response => {
     setLateCount(response.data.length)
  })
  
}

async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response => {
    setType(response.data.type)
    setTitle(response.data.title)
    setDescription(response.data.description)
    setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
    setHour(format(new Date(response.data.when), 'HH:mm'))
    })

}

async function Save(){

if(match.params.id){
    await api.put(`/task/${match.params.id}`, {

        macaddress,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
    
    }).then(()=>
        setRedirect(true)
        //alert('Task has been saved successfully')
    )
   
}else{

await api.post('/task', {

    macaddress,
    type,
    title,
    description,
    when: `${date}T${hour}:00.000`

}).then(()=>
setRedirect(true)
)

}
}


const myForm = useRef(null)

 const submit = () => {

   myForm.current.reset(); // will reset the entire form :)

   }

 useEffect(()=>{
   lateVerify();
   LoadTaskDetails();
 }, [])

  return (
   
  <S.Container>
   <S.GlobalStyle/>

   {redirect && <Redirect to="/"/>}
   <Header lateCount={lateCount}  />

   <S.Form ref={myForm} onSubmit={submit}>
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
          <input 
           type="text"
           placeholder="type a task title..."
           onChange={e => setTitle(e.target.value)} value={title}/>
      </S.Input>

      
      <S.TextArea>
          <span>Description</span>
          <textarea rows={5}
          type="text" 
          placeholder="task details..."
          onChange={e => setDescription(e.target.value)} value={description}
          
          />
      </S.TextArea>


      <S.Input>
          <span>Date</span>
          <input 
          type="date" 
          placeholder="type a date..."
          onChange={e => setDate(e.target.value)} value={date}
          />
          <img src={iconCalendar} alt="calendar"/>
      </S.Input>

     
      <S.Input>
          <span>Hour</span>
          <input 
          type="time"
          placeholder="type a hour..."
          onChange={e => setHour(e.target.value)} value={hour}
          />
          <img src={iconClock} alt="clock"/>
      </S.Input>

      <S.Options>
          <div>
              <input 
              type="checkbox" 
              checked={done} 
              onChange={() => setDone(!done)}/>
              <span>COMPLETED</span>
          </div>
          <button type="button">DELETE</button>

      </S.Options>


      <S.Save>

      <button type="button" onClick={Save}>SAVE</button>

      </S.Save>

    </S.Form>   

   <Footer/>
 
  </S.Container>
  
  
  
  )
}

export default Task;
