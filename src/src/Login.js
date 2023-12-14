import AuthDetails from "./components/auth/AuthDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
const Autorizacia = () => {
    return ( 
        <div>
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div> 
     );
}

export default Autorizacia;