import './App.css';
import useFetch from './useFetch';
import { useState } from 'react';
import PonukaPreview from './PonukaPreview';
import { Link } from 'react-router-dom';


function Home( {AuthUser} ) {
  const [fetchAgain, setFetchagain] = useState(0)
  const { data, isPending, Error} = useFetch('http://localhost:8000/ponuka', fetchAgain)
  //const [newData, setNewData] = useState(null)

  return (
    <div className="trhovisko">
      { Error && <div>{ Error }</div> }
      { isPending && <div>Loading...</div> }
      { data &&
      <div className="udalosti">
        <Link to='/vytvorit_ponuku'>
            <button> Pridat ponuku </button>
        </Link>
        {data.map((ponuka) => (
          <div className="ponuky" key={ponuka.id} >
            <PonukaPreview AuthUser={AuthUser} ponuka={ponuka} fetchAgain={fetchAgain} setFetchagain={setFetchagain} />
          </div>
        ))
        }
      </div>}
    </div>
  );
}

export default Home;