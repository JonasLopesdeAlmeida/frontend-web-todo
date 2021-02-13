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

import isConnected from '../../utils/isConnected';

function Task({match}) {
 
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState();


async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response => {
    setType(response.data.type)
    setTitle(response.data.title)
    setDone(response.data.done)
    setDescription(response.data.description)
    setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
    setHour(format(new Date(response.data.when), 'HH:mm'))
    })

}

async function Save(){
    if(!title)
    return alert("Please, type a title for the task!")
    else if(!description)
    return alert("Please, type a description for the task!")
    else if(!type)
    return alert("Please, select a type for the task!")
    else if(!date)
    return alert("Please, select a date for the task!")
    else if(!hour)
    return alert("Please, selct a hour for the task!")


if(match.params.id){
    await api.put(`/task/${match.params.id}`, {

        macaddress: isConnected,
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

    macaddress: isConnected,
    type,
    title,
    description,
    when: `${date}T${hour}:00.000`

}).then(()=>
// window.location.reload()
setRedirect(true)

)

}
}

async function Remove(){
const res = window.confirm('Are you sure you want to remove this task?')
if(res === true){
    await api.delete(`/task/${match.params.id}`)
    .then(() => setRedirect(true))
}
}


 useEffect(()=>{
  if(!isConnected)
  setRedirect(true)
  LoadTaskDetails();
 }, [])

  return (
   
  <S.Container>
   <S.GlobalStyle/>

   {redirect && <Redirect to="/"/>}
   <Header/>

   <S.Form >
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
         {match.params.id && <button type="button" onClick={Remove}>DELETE</button>}

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
