import AuthDetails from "./components/auth/AuthDetails";
import SignIn from "./components/auth/SignIn";
import { Link } from "react-router-dom";
const Login = ( {AuthUser} ) => {
    return ( 
        <div>
            <SignIn />
            <AuthDetails AuthUser={AuthUser} />
            <div> Nemate ucet? Vytvorte si ho <Link to='/register'>Tu</Link> </div>
        </div> 
     );
}

export default Login;