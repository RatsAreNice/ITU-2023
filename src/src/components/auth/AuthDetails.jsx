import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [AuthUser, setAuthUser] = useState(null)
    const auth = getAuth();

    useEffect (() =>{
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth)
    }
    return ( 
        <div> {AuthUser ? <><p>{`Prihlaseny ako ${AuthUser.email}`}</p><button onClick={userSignOut}>Odhlasit</button></> : <p>Odhlaseny</p>} </div>
     );
}
 
export default AuthDetails;