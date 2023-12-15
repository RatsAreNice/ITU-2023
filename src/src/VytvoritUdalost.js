import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const VytvoritUdalost = ( { AuthUser } ) => {
  const [event_name, setEvent_name] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [max_people, setMax_people] = useState("")
  const [start_date, setStart_date] = useState("")
  const [end_date, setEnd_date] = useState("")
  const [start_time, setStart_time] = useState("")
  const [end_time, setEnd_time] = useState("")
  const [isPending, setIsPending] = useState(false)
  const [kategoria, setKategoria] = useState("Sport")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const creator = AuthUser.email;
    const udalost = { event_name, description, location, max_people, start_date, start_time, end_date, end_time, creator, kategoria}

    setIsPending(true);

    fetch('http://localhost:8000/udalost', {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(udalost)
    }).then(() => {
      setIsPending(false)
      navigate('/')
    })
  }

  if (AuthUser == null){
    return (
      <h1>Pre vytvorenie udalosti musite byt prihlaseny</h1>
    );
  }
  
  return ( 
    <div className="create">
    <h2>Vytvorit udalost</h2>
    <form onSubmit={handleSubmit}>
      <label> Nazov: </label>
      <input
        type="text"
        required
        value={ event_name }
        onChange={(e) => setEvent_name(e.target.value)}
      ></input>

      <label> Popis: </label>
      <textarea
        required
        value={ description }
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label> Lokacia: </label>
      <input
        type="text"
        required
        value={ location }
        onChange={(e) => setLocation(e.target.value)}
      ></input>

    <label> Kapacita: </label>
    <input
      type="number"
      required
      value={ max_people }
      onChange={(e) => setMax_people(e.target.value)}
    ></input>

    <label> Datum zaciatku: </label>
    <input type="date" min="2023-01-01" max="2030-12-31" value={ start_date } onChange={(e) => setStart_date(e.target.value)}/>
    
    <label> Cas zaciatku: </label>
    <input type="time" min="00:00" max="23:59" required value={ start_time } onChange={(e) => setStart_time(e.target.value)}/>

    <label> Datum Konca: </label>
    <input type="date" min="2023-01-01" max="2030-12-31" value={ end_date } onChange={(e) => setEnd_date(e.target.value)}/>
    
    <label> Cas Konca: </label>
    <input type="time" min="00:00" max="23:59" required value={ end_time } onChange={(e) => setEnd_time(e.target.value)}/>

    <label> Kategoria: </label>
    <select
      value={kategoria}
      onChange={(e) => setKategoria(e.target.value)}
    >
      <option value={"Sport"}>Sport</option>
      <option value={"Zabava"}>Zabava</option>
      <option value={"Doskove hry"}>Doskove hry</option>
      <option value={"Konicky"}>Konicky</option>
      <option value={"Ine"}>Ine</option>
    </select>
    
    { !isPending && <button> Vytvorit udalost </button>}
    { isPending && <button disabled> Pridavam... </button>}

    </form>
    </div>
   );

}
 
export default VytvoritUdalost;