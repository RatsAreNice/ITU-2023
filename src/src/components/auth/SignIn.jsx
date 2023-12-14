import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    return (
        <div className="Signincontainer">
            <form onSubmit={signIn}>
                <h1>Prihlasenie</h1>
                <input type="email" placeholder="Vas email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Vase heslo" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Prihlasit</button>
            </form>
        </div>
    );
}
 
export default SignIn;