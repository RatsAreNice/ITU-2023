import './App.css';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import ZaujemButton from './ZaujemButton';
import { useEffect, useState } from 'react';
import Filters from './filters';


function Home( {AuthUser} ) {
  const [fetchAgain, setFetchagain] = useState(0)
  const { data, isPending, Error} = useFetch('http://localhost:8000/udalost?_embed=zaujemca', fetchAgain)
  const [newData, setNewData] = useState(null)

  return (
    <div className="home">
      { Error && <div>{ Error }</div> }
      { isPending && <div>Loading...</div> }
      { data &&
      //data.event_name
      //<div><pre>{JSON.stringify(data, null, 2) }</pre></div> 
      <div className="udalosti">
        <Filters data={data} setNewData={setNewData} />
        {newData && newData.map((event) => (
          <div className="udalosti-preview" key={event.id} >
            <Link to={`/udalost/${event.id}`}>
            <h1>Udalost { event.event_name } </h1>
            <h2>{ event.location }</h2>
            <h2>O { event.start_date } cas {event.start_time}</h2>
            <h2>{ event.kategoria }</h2>
            </Link>
            <ZaujemButton AuthUser={AuthUser} data={event} id={event.id} fetchAgain={fetchAgain} setFetchagain={setFetchagain} />
          </div>
        ))
        }
      </div>}
    </div>
  );
}

export default Home;