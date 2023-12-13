import './App.css';
import { useState} from "react";
import Navbar from "./navbar";
import useFetch from './useFetch';
import { Link } from 'react-router-dom';


function Home() {
    var [event, setEvent] = useState(null);
    const { data, isPending, Error} = useFetch('http://eva.fit.vutbr.cz/~xdobia15/')

  return (
    <div className="home">
      { Error && <div>{ Error }</div> }
      { isPending && <div>Loading...</div> }
      { data && 
      //data.event_name
      //<div><pre>{JSON.stringify(data, null, 2) }</pre></div> 
      <div className="udalosti">
        {data.map((event) => (
          <div className="udalosti-preview" key={event.event_name} >
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

export default Home;