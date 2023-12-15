import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Diskusia from "./Diskusia";

const DetailUdalosti = ( {AuthUser} ) => {
    const { id } = useParams()
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/udalost/' + id, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
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
            { AuthUser && 
             AuthUser.email === data.creator ? (<div><button onClick={handleClick}>Odstranit udalost</button>
            <Link to={`/udalost/${id}/upravit`}><button>Upravit udalost</button></Link></div>) : <></> }
            
            <Diskusia id={id} AuthUser={AuthUser} />
        </div> 
        }
      </div>
    );
}
 
export default DetailUdalosti;