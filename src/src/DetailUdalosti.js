import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailUdalosti = () => {
    const { id } = useParams()
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('http://eva.fit.vutbr.cz/~xdobia15/event', {
            method: 'POST', 
            mode: 'cors', 
            body: id // body data type must match "Content-Type" header
        })
        .then(res => {
            if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
        })
        .catch(err => {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
        })
    }, [])

    return (
        <div className="detail">
            <h1> Detail udalosti {id} </h1>
        </div>

    );
}

export default DetailUdalosti;