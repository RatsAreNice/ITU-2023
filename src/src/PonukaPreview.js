import { Link } from "react-router-dom";
import { useState } from "react";

const PonukaPreview = ( {AuthUser, ponuka, fetchAgain, setFetchagain} ) => {
    const [detail, setDetail] = useState(false);

    let vlastnik = false;

    if(AuthUser){
        if(AuthUser.email === ponuka.user){
            vlastnik = true;
        }
    }

    const zobrazitDetail = () => {
        setDetail(true);
    }

    const skrytDetail = () => {
        setDetail(false);
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
            <h2>Cena: { ponuka.cena }</h2>

            {!detail && <button onClick={zobrazitDetail}> Detail </button>}
            {detail && <button onClick={skrytDetail}> Skryt detail </button>}

            {detail && 
                <div className="detail">
                <h2>Popis: { ponuka.popis }</h2>
                <h2>Od { ponuka.user }</h2>
                <div className="obrazok">
                    <img src={ ponuka.image } alt="" />
                </div>
                </div>
            }
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