import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Diskusia from "./Diskusia";
import Zaujemci from "./zaujemci";
import { useEffect, useState } from "react";
import ZaujemButton from "./ZaujemButton";

const DetailUdalosti = ( {AuthUser, id, fetch2} ) => {
    const navigate = useNavigate();
    //const [isLoading, setIsLoading] = useState(false)
    const [fetchAgain, setFetchagain] = useState(0)
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id + '?_embed=zaujemca', fetchAgain)
    let ucastnici = 0;

    useEffect(() => {
      setFetchagain(fetchAgain + 1);
      console.log("runnuje setfetchagain v detaile")
  }, [fetch2]);

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
        //vymazanie udalosti

        fetch('http://localhost:8000/udalost/' + id, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        }) 
    }

    if(data && AuthUser){
      data.zaujemca.forEach(checkInterest)
    }

    function checkInterest(item) {
      ucastnici++;
    } 


    return (
        <div className="home">
        { Error && <div>{ Error }</div> }
        { isPending && <div>Loading...</div> }
        { data && 
        <div className="detailUd">
            { AuthUser && 
             AuthUser.email === data.creator ? (<div className="editButtons"><button onClick={handleDelete}>Odstranit udalost</button>
            <Link to={`/udalost/${id}/upravit`}><button>Upravit udalost</button></Link></div>) : <></> }
            <div className="diskusiaWrapper">
            <Diskusia id={id} AuthUser={AuthUser} />
            </div>
            <div className="detailSpodok">
            <div className="leftWrapper">
            <div className="kategoria">Kategória: { data.kategoria }</div>
            <div className="organizator">Organizátor: { data.creator }</div>
            </div>
            <div className="zaujemci">
            <Zaujemci zaujemci={data.zaujemca}/>
            </div>
            </div>
        </div> 
        }
      </div>
    );
}
 
export default DetailUdalosti;