import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header';
import FilterCard from '../../Components/FilterCard';
import TaskCard from '../../Components/TaskCard';
import Footer from '../../Components/Footer';
import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';
import isConnected from '../../utils/isConnected';

import api from '../../services/api';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);


 async function loadTasks(){
   await api.get(`/task/filter/${filterActived}/${isConnected}`)
   .then(response => {
      setTasks(response.data)
   })
 }


function Notification(){
  setFilterActived('late');
}


 useEffect(()=>{
   loadTasks();
   if(!isConnected)
   setRedirect(true);
 }, [filterActived, loadTasks])

  return (
   
  <S.Container>
   <S.GlobalStyle/>
   
   {redirect && <Redirect to="/qrcode"/>}
   <Header clickNotification={Notification} />

   <S.FilterArea>
   <button type="button" onClick={() => setFilterActived("all")}>
   <FilterCard title="All" actived={filterActived === 'all'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("today")}>
   <FilterCard title="Today" actived={filterActived === 'today'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("week")}>
   <FilterCard title="Week" actived={filterActived === 'week'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("month")}> 
   <FilterCard title="Month" actived={filterActived === 'month'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("year")}>
   <FilterCard title="Year" actived={filterActived === 'year'} />
   </button>

   </S.FilterArea>

   <S.Title>
     <h3>{filterActived === 'late' ? 'Tasks Late' : 'Tasks'}</h3>
   </S.Title>
    
    <S.Content>
   {
     tasks.map(t => (

      <Link to={`/task/${t._id}`}>
       <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/>
      </Link>
    
     ))
    
   }
    
    </S.Content>

   <Footer/>
 
  </S.Container>
  
  
  
  )
}

export default Home;
