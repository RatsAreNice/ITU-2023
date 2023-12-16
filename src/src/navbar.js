import { Link } from "react-router-dom";
import logo from './imgs/ronniehomie.png';


const Navbar = () => {
    const LinkStyle = {
        color: '#d285ae',
        textDecoration: 'none',
        padding: '10px',
        margin: '5px',
        border: '1px solid #d285ae',
        borderRadius: '5px',
        background: '#fff',
        display: 'inline-block'
    };
    const ButtonsBackground = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
        overflow: 'visible',
        
    };

    return ( 
        <div style={ButtonsBackground}>
            <img src={ logo }  width="50px" height="50px"/>
            <Link to="/" style={LinkStyle}>
                Vsetky Udalosti
            </Link>
            <Link to="/profile" style={LinkStyle}>
                Prihlasenie
            </Link>
            <Link to="/vytvorit" style={LinkStyle}>
                Vytvorit udalost
            </Link>
            <Link to="/moje" style={LinkStyle}>
                Vytvorene Udalosti
            </Link>
            <Link to="/zaujem" style={LinkStyle}>
                Udalosti o ktore mam zaujem
            </Link>
            <Link to="/trhovisko" style={LinkStyle}>
                    Trhovisko
            </Link>
            <p id="saved"></p>
            
            <br />
            <br />
        </div>
     );
}
 
export default Navbar;