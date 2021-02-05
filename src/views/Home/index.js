import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header';
import FilterCard from '../../Components/FilterCard';
import TaskCard from '../../Components/TaskCard';
import Footer from '../../Components/Footer';
import * as S from './styles';

import api from '../../services/api';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);

 async function loadTasks(){
   await api.get(`/task/filter/${filterActived}/11-11-11-11-11-12`)
   .then(response => {
      setTasks(response.data)
   })
 }

 useEffect(()=>{
   loadTasks();
 }, [filterActived])

  return (
   
  <S.Container>
   <S.GlobalStyle/>
   <Header/>

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
     <h3>Tasks</h3>
   </S.Title>
    
    <S.Content>
   {
     tasks.map(t => (
     <TaskCard type={t.type} title={t.title} when={t.when}/>
     ))
    
   }
    
    </S.Content>

   <Footer/>
 
  </S.Container>
  
  
  
  )
}

export default Home;
