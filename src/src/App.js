import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import NajistUdalosti from './NajistUdalosti';
import Profile from './Profile';
import VytvoritUdalost from './VytvoritUdalost';
import Navbar from './navbar';
import DetailUdalosti from './DetailUdalosti';

function App() {
  

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
            </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;