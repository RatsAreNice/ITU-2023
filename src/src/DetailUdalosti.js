import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DetailUdalosti = () => {
    const { id } = useParams()
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id)

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
        </div> 
        
        }
      </div>
    );
}
 
export default DetailUdalosti;