import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Diskusia from "./Diskusia";
import Zaujemci from "./zaujemci";
import { useState } from "react";

const DetailUdalosti = ( {AuthUser} ) => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [fetchAgain, setFetchagain] = useState(0)
    let zaujem = false;
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id + '?_embed=zaujemca', fetchAgain)
    let zaujemID = 0;

    //zisti ci uzivatel ma o udalost zaujem
    if(data && AuthUser){
      data.zaujemca.forEach(checkInterest)
    }
    
    function checkInterest(item) {
      if(item.user === AuthUser.email){
        zaujem = true;
        zaujemID = item.id
      }
    } 

    const handleDelete = () => {
        //vymazanie prispevkov k danej udalosti
        fetch('http://localhost:8000/udalost/' + id + '?_embed=prispevok')
        .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        data.prispevok.map((prisp) => (
            fetch('http://localhost:8000/prispevok/' + prisp.id, {method: "DELETE"})
        ));
      })
        //

        fetch('http://localhost:8000/udalost/' + id, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        }) 
    }

    const potrvrditUcast = () => {
      const udalostId = id;
      const user = AuthUser.email;
      const zaujem = { udalostId, user }

      setIsLoading(true);

      fetch('http://localhost:8000/zaujemca', {
          method: 'POST',
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify(zaujem)
        }).then(() => {
          setIsLoading(false)
          //tu potrebujem aby sa znova fetchli data
          setFetchagain(fetchAgain + 1)
          //test
        })
    }

    const zrusitUcast = () => {
      const udalostId = id;
      const user = AuthUser.email;
      const zaujem = { udalostId, user }

      setIsLoading(true);

      fetch('http://localhost:8000/zaujemca/' + zaujemID, {
          method: 'DELETE',
          //headers: { "Content-Type" : "application/json" },
          //body: JSON.stringify(zaujem)
        }).then(() => {
          setIsLoading(false)
          //tu potrebujem aby sa znova fetchli data
          setFetchagain(fetchAgain + 1)
          //test
        })
    }

    return (
        <div className="home">
        { Error && <div>{ Error }</div> }
        { isPending && <div>Loading...</div> }
        { data && 
        <div>
            <h1>Detail udalosti { data.event_name }</h1>
            <p>Miesto : { data.location }</p>
            <p>Zaciatok : { data.start_date } o { data.start_time }</p>
            <p>Koniec : { data.end_date } o { data.end_time }</p>
            <p>Kapacita : { data.max_people } </p>
            <p>Popis : { data.description } </p>
            { !zaujem && AuthUser && <button onClick={potrvrditUcast} >Mam zaujem</button> }
            { zaujem && AuthUser && <button onClick={zrusitUcast}>Zrusit ucast</button> }
            { AuthUser && 
             AuthUser.email === data.creator ? (<div><button onClick={handleDelete}>Odstranit udalost</button>
            <Link to={`/udalost/${id}/upravit`}><button>Upravit udalost</button></Link></div>) : <></> }
            
            <Diskusia id={id} AuthUser={AuthUser} />
            <Zaujemci zaujemci={data.zaujemca}/>
        </div> 
        }
      </div>
    );
}
 
export default DetailUdalosti;