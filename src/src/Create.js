import './App.css';
import { useState} from "react";




function Create() {

    var [event, setEvent] = useState(null);

    const makeAPICall = async () => {
      try {
        const response = await fetch('http://eva.fit.vutbr.cz/~xdobia15/', {mode:'cors'});
        const data = await response.json();
        setEvent(data);
      }
      catch (e) {
        console.log(e)
      }
    }

  function handleClick(){
    makeAPICall();
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
                <a href="/najist">
                    <button>Najist Udalost</button>
                </a>
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
        <br/>
        <div className='Title'><h1>Vytvorit</h1>
            <div className='Button'>
                <button onClick={handleClick}>Načítať udalosť</button> 
                { printdata() }
            </div>
        </div>
    </div>
  );
}

export default Create;