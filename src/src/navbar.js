import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="buttons">
            <div className="action_btn">
                <Link to="/">
                    <button>Moje Udalosti</button>
                </Link>
                <Link to="/profile">
                    <button>Profil</button>
                </Link>
                <Link to="/vytvorit">
                <button>Vytvorit udalost</button>
                </Link>
                <Link to="/najist">
                        <button>Najist Udalost</button>
                </Link>
                <p id="saved"></p>
            </div>
            <br />
            <br />
        </div>
     );
}

export default Navbar;