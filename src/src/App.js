import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import VytvoritUdalost from './VytvoritUdalost';
import Navbar from './navbar';
import DetailUdalosti from './DetailUdalosti';
import Login from './Login';
import SignUp from './components/auth/SignUp';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import MojeUdalosti from './MojeUdalosti';
import AuthDetails from './components/auth/AuthDetails';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import UpravitUdalost from './UpravitUdalost';

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDk0nP1UATFPOxaBBv04PkqnEEeCcRYnyk",
    authDomain: "ituvut-6f301.firebaseapp.com",
    projectId: "ituvut-6f301",
    storageBucket: "ituvut-6f301.appspot.com",
    messagingSenderId: "685820856675",
    appId: "1:685820856675:web:826dd6e84aadae92852b56"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const [AuthUser, setAuthUser] = useState(null);

  const ChangeUser = (newUser) => {
    setAuthUser(newUser)
  }

  useEffect (() =>{
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            ChangeUser(user)
        } else{
            ChangeUser(null);
        }
    })

    return () => {
        listen();
    }
  }, []);

  //informacie o prihlasenom uzivatelovi su v AuthUser. ak je to null, uzivatel je odhlaseny. AuthUser.email vrati jeho email
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='Content'>
            <Routes>
              <Route exact path='/' element={< Home AuthUser={AuthUser} />}></Route>
              <Route exact path='/moje' element={< MojeUdalosti AuthUser={AuthUser} />}></Route>
              <Route exact path='/profile' element={< Login AuthUser={AuthUser} />}></Route>
              <Route exact path='/vytvorit' element={< VytvoritUdalost AuthUser={AuthUser} />}></Route>
              <Route path="/udalost/:id" element={< DetailUdalosti AuthUser={AuthUser} />}></Route>
              <Route exact path="/register" element={< SignUp />}></Route>
              <Route path="/udalost/:id/upravit" element={< UpravitUdalost AuthUser={AuthUser} />}></Route>
            </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;