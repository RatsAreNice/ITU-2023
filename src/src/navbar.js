import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="buttons">
            <div className="action_btn">
                <Link to="/">
                    <button>Vsetky Udalosti</button>
                </Link>
                <Link to="/profile">
                    <button>Prihlasenie</button>
                </Link>
                <Link to="/vytvorit">
                <button>Vytvorit udalost</button>
                </Link>
                <Link to="/moje">
                        <button>Vytvorene Udalosti</button>
                </Link>
                <Link to="/zaujem">
                        <button>Udalosti o ktore mam zaujem</button>
                </Link>
                <Link to="/trhovisko">
                        <button>Trhovisko</button>
                </Link>
                <p id="saved"></p>
            </div>
            <br />
            <br />
        </div>
     );
}
 
export default Navbar;