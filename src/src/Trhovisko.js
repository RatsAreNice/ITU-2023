import './App.css';
import useFetch from './useFetch';
import { useState } from 'react';
import PonukaPreview from './PonukaPreview';
import VytvoritPonuku from './VytvoritPonuku';


function Home( {AuthUser} ) {
  const [fetchAgain, setFetchagain] = useState(0)
  const { data, isPending, Error} = useFetch('http://localhost:8000/ponuka', fetchAgain)
  const [vytvorenie, setVytvorenie] = useState(false)

  const showVytvorenie = () => {
    setVytvorenie(true)
  }

  const hideVytvorenie = () => {
    setVytvorenie(false)
  }

  return (
    <div className="trhovisko">
    {!vytvorenie && <button onClick={showVytvorenie}>Vytvorit ponuku</button>}
      {vytvorenie && <button onClick={hideVytvorenie}>Vytvorit ponuku</button>}

      {vytvorenie && <VytvoritPonuku AuthUser={AuthUser} fetchAgain={fetchAgain} setFetchagain={setFetchagain} />}
      { Error && <div>{ Error }</div> }
      { isPending && <div>Loading...</div> }
      { data &&
      <div className="udalosti">
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