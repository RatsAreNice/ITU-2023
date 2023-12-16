import { Link } from "react-router-dom";
import ZaujemButton from "./ZaujemButton";
import { useEffect, useState } from "react";

const PonukaPreview = ( {AuthUser, ponuka, fetchAgain, setFetchagain} ) => {
    //useEffect(() => {
    //    console.log("v udalost preview ide useeffect")
    //    setFetchagain(fetchAgain + 1)
    //}, [fetch2])

    let vlastnik = false;

    if(AuthUser){
        if(AuthUser.email === ponuka.user){
            vlastnik = true;
        }
    }

    const handleDelete = () => {
        fetch('http://localhost:8000/ponuka/' + ponuka.id, {
            method: "DELETE"
        }).then(() => {
            setFetchagain(fetchAgain + 1);
            //navigate('/')
        }) 
    }

    return ( 
        <div className="ponuka-preview" key={ponuka.id} >
            <h1>Ponuka { ponuka.nazov } </h1>
            <h2>Popis: { ponuka.popis }</h2>
            <h2>Od { ponuka.user }</h2>
            { vlastnik && 
            <div className="buttons">
                <button onClick={handleDelete}> Odstranit ponuku </button>
                <Link to={`/ponuka/${ponuka.id}/upravit`}><button>Upravit ponuku</button></Link>
            </div>
            }
        </div>
     );
}
 
export default PonukaPreview;