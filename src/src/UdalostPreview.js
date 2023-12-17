import { Link } from "react-router-dom";
import ZaujemButton from "./ZaujemButton";
import { useEffect, useState } from "react";

const UdalostPreview = ( {AuthUser, event, fetchAgain, setFetchagain} ) => {
    const [fetch2, setFetch2] = useState(0)

    useEffect(() => {
        console.log("v udalost preview ide useeffect")
        setFetchagain(fetchAgain + 1)
    }, [fetch2])

    return ( 
        <div className="udalosti-preview" key={event.id} >
            <Link to={`/udalost/${event.id}`}>
            <p className="Udalost_name">Udalost { event.event_name } </p>
            <p className="Udalost_lokacia">{ event.location }</p><br /> 
            <p className="Udalost_zaciatok">O { event.start_date } cas {event.start_time}</p>
            <p className= "Udalost_kategoria">{ event.kategoria }</p>
            </Link>
            <ZaujemButton AuthUser={AuthUser} data={event} id={event.id} fetchAgain={fetchAgain} setFetchagain={setFetchagain} />
        </div>
     );
}
 
export default UdalostPreview;