import { Link } from "react-router-dom";
import ZaujemButton from "./ZaujemButton";
import { useEffect, useState } from "react";

const UdalostPreview = ({ AuthUser, event, fetchAgain, setFetchagain }) => {
    const [fetch2, setFetch2] = useState(0);

    useEffect(() => {
        console.log("v udalost preview ide useeffect");
        setFetchagain(fetchAgain + 1);
    }, [fetch2]);

    return (
        <table className="udalosti-preview" key={event.id}>
            <tbody>
                <tr>
                        <Link to={`/udalost/${event.id}`}>
                            <td><div className="Udalost_Info">Udalosť: {event.event_name}</div></td>
                            <td><div className="Udalost_Info">Lokacia: {event.location}</div></td>
                            <td><div className="Udalost_Info">
                                Zaciatok: {event.start_date} <br /> {event.start_time}
                            </div></td>
                            <td><div className="Udalost_Info">Kategoria: {event.kategoria}</div></td>
                        </Link>
                        </ tr>
                        <tr>
                        <div className="ZaujemButton">
                            <ZaujemButton 
                                AuthUser={AuthUser}
                                data={event}
                                id={event.id}
                                fetchAgain={fetchAgain}
                                setFetchagain={setFetchagain}
                            />
                        </div>
                </tr>
            </tbody>
        </table>
    );
};
 
export default UdalostPreview;