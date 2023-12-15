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
            <h1>Udalost { event.event_name } </h1>
            <h2>{ event.location }</h2>
            <h2>O { event.start_date } cas {event.start_time}</h2>
            <h2>{ event.kategoria }</h2>
            </Link>
            <ZaujemButton AuthUser={AuthUser} data={event} id={event.id} fetchAgain={fetchAgain} setFetchagain={setFetchagain} />
        </div>
     );
}
 
export default UdalostPreview;