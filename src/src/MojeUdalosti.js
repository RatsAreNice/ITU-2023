import './App.css';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';


function MojeUdalosti({ AuthUser }) {
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost')
    let filteredData = null;

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
            {filteredData.map((event) => (
              <div className="udalosti-preview" key={event.id} >
                <Link to={`/udalost/${event.id}`}>
                <h1>Udalost { event.event_name } </h1>
                <h2>{ event.location }</h2>
                </Link>
              </div>
            ))
            }
          </div>}
        </div>
      );
    }
}

export default MojeUdalosti;