import React, {useState} from 'react';
import Header from '../../Components/Header'
import FilterCard from '../../Components/FilterCard'
import Footer from '../../Components/Footer'
import * as S from './styles'

function Home() {
  const [filterActived, setFilterActived] = useState('all');

  return (
  <S.Container>
   
   <Header/>
   <S.FilterArea>
   <button type="button" onClick={() => setFilterActived("all")}>
   <FilterCard title="All" actived={filterActived == 'all'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("today")}>
   <FilterCard title="Today" actived={filterActived == 'today'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("week")}>
   <FilterCard title="Week" actived={filterActived == 'week'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("month")}> 
   <FilterCard title="Month" actived={filterActived == 'month'} />
   </button>
   
   <button type="button" onClick={() => setFilterActived("year")}>
   <FilterCard title="Year" actived={filterActived == 'year'} />
   </button>

   </S.FilterArea>
   <Footer/>

  </S.Container>
  
  
  
  )
}

export default Home;
