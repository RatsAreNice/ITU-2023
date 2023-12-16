import './App.css';
import useFetch from './useFetch';
import { useState } from 'react';
import Filters from './filters';
import UdalostPreview from './UdalostPreview';


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
        <Filters data={data} setNewData={setNewData} fetchAgain={fetchAgain}/>
        {newData && newData.map((event) => (
          <div className="udalosti-preview" key={event.id} >
            <UdalostPreview AuthUser={AuthUser} event={event} fetchAgain={fetchAgain} setFetchagain={setFetchagain} />
          </div>
        ))
        }
      </div>}
    </div>
  );
}

export default Home;