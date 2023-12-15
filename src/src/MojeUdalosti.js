import './App.css';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import Filters from './filters';
import { useState } from 'react';
import UdalostPreview from './UdalostPreview';


function MojeUdalosti({ AuthUser }) {
  const [fetchAgain, setFetchagain] = useState(0)
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost?_embed=zaujemca', fetchAgain)
    let filteredData = null;
    const [newData, setNewData] = useState(null)

    if((data != null) && (AuthUser != null)){
      filteredData = data.filter(events => events.creator === AuthUser.email);
    } else{
      filteredData = null;
    }

    if (AuthUser == null){
      return (
        <h1>Pre zobrazenie vasich udalosti musite byt prihlaseny</h1>
      );
    }else{
      return (
        <div className="home">
          { Error && <div>{ Error }</div> }
          { isPending && <div>Loading...</div> }
          { filteredData && 
          
          //data.event_name
          //<div><pre>{JSON.stringify(data, null, 2) }</pre></div> 
          <div className="udalosti">
            <Filters data={data} setNewData={setNewData} />
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
}

export default MojeUdalosti;