import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import NajistUdalosti from './NajistUdalosti';
import Profile from './Profile';
import VytvoritUdalost from './VytvoritUdalost';
import Navbar from './navbar';
import DetailUdalosti from './DetailUdalosti';
import Autorizacia from './Login';
import SignIn from './components/auth/SignIn';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='Content'>
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/najist' element={< NajistUdalosti />}></Route>
              <Route exact path='/profile' element={< Profile />}></Route>
              <Route exact path='/vytvorit' element={< VytvoritUdalost />}></Route>
              <Route path="/udalost/:id" element={< DetailUdalosti />}></Route>
              <Route exact path="/login" element={< SignIn />}></Route>
            </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;