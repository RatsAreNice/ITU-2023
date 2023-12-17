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
            <Link to={`/udalost/${event.id}`}>
            <tbody>
                <tr>
                    <td><div className="Udalost_Info">Udalosť:</div></td>
                    <td><div className="Udalost_Info">Lokacia:</div></td>
                    <td><div className="Udalost_Info">Začiatok:</div></td>
                    <td><div className="Udalost_Info">Kategoria:</div></td>
                </tr>
                <tr>
                        <td><div className="Udalost_Info">{event.event_name}</div></td>
                        <td><div className="Udalost_Info">{event.location}</div></td>
                        <td><div className="Udalost_Info">
                            {event.start_date} <br /> {event.start_time}
                        </div></td>
                        <td><div className="Udalost_Info">{event.kategoria}</div></td>
                </ tr>
            </tbody>
            <div className="ZaujemButton">
                        <ZaujemButton 
                            AuthUser={AuthUser}
                            data={event}
                            id={event.id}
                            fetchAgain={fetchAgain}
                            setFetchagain={setFetchagain}
                        />
                    </div>
            </Link>
        </table>
    );
};
 
export default UdalostPreview;