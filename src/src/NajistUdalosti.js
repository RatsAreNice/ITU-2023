import './App.css';
import { useState} from "react";




function NajistUdalosti() {

    var [event, setEvent] = useState(null);

  function handleClick(){
    fetch('http://eva.fit.vutbr.cz/~xdobia15/')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setEvent(data);
    })
  }
  

  function printdata(){
    if(event != null){
      return <div><pre>{JSON.stringify(event, null, 2) }</pre></div>;
    }
    return "";
  }


  return (
  <div className='Body'>
          <div class="buttons">
              <div class="action_btn">
                  <a href="/">
                      <button>Moje Udalosti</button>
                  </a>
                  <a href="/profile">
                      <button>Profil</button>
                  </a>
                  <p id="saved"></p>
              </div>
          </div>
          <br/>
          <div className='Title'><h1>Najist Udalost</h1>
              <div className='Button'>
                  <button onClick={handleClick}>Načítať udalosť</button> 
                  { printdata() }
              </div>
          </div>
      </div>
  );
}

export default NajistUdalosti;