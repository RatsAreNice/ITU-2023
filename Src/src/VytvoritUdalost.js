import './App.css';
import { useState} from "react";

//create input field component
export function InputField(label,className) {
  return (
    <>
    <label>
        {label}
        <input type="text" className={className} />
    </label>
    <br />
    </>
  );
}

function SendData() {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({ 
            event_name: document.getElementsByClassName("event_name")[0].value,
            location: document.getElementsByClassName("location")[0].value,
            start_date: document.getElementsByClassName("StartDate")[0].value,
            end_date: document.getElementsByClassName("EndDate")[0].value,
            description: document.getElementsByClassName("description")[0].value
        })
    }
    const makeAPICall = async () => {
        try {
          const response = await fetch('http://eva.fit.vutbr.cz/~xdobia15/', options);
          const data = await response.json();
          console.log(data);
        }
        catch (e) {
          console.log(e)
        }
      }
    makeAPICall();
}


function VytvoritUdalost() {
  function handleClick(){
    SendData();
  }
  
  function printdata(data){
    
    return <div><pre>{JSON.stringify(data, null, 2) }</pre></div>;
    
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
                  <a href="/vytvorit">
                    <button>Vytvorit udalost</button>
                </a>
                  <p id="saved"></p>
              </div>
          </div>
          <br/>
          <br/>
          <div className='Title'><h1>Vytvorit Udalost</h1>
              <div className='Button'>
                    { InputField("Nazov udalosti: ","event_name") }
                    { InputField("Lokacia: ","location") }
                    { InputField("Datum zaciatku: ","StartDate") }
                    { InputField("Datum konca: ","EndDate") }
                    { InputField("Popis: ","description") }
                    
                    
                  <button onClick={handleClick}>submit</button> 
                  { printdata() }
                  
              </div>
          </div>
          
      </div>
  );
}

export default VytvoritUdalost;