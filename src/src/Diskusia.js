import { useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Diskusia = ( {id , AuthUser} ) => {
    const [text, setText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [fetchAgain, setFetchagain] = useState(0)
    const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id + '?_embed=prispevok', fetchAgain);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = AuthUser.email;
        const udalostId = id;
        const prispevok = { udalostId, user, text }
    
        setIsLoading(true);
    
        fetch('http://localhost:8000/prispevok', {
          method: 'POST',
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify(prispevok)
        }).then(() => {
          setIsLoading(false)
          //tu potrebujem aby sa znova fetchli data
          setFetchagain(fetchAgain + 1)
          //test
        })
      }

    return (
        <div className="home">
          { Error && <div>{ Error }</div> }
          { isPending && <div>Loading...</div> }
          { data && 
          //data.event_name
          //<div><pre>{JSON.stringify(data, null, 2) }</pre></div> 
          <div className="udalosti">
            {data.prispevok.map((prisp) => (
              <div className="udalosti-preview" key={prisp.id} >
                <h1>Prispevok od { prisp.user } </h1>
                <h2>{ prisp.text }</h2>
              </div>
            ))
            }
            { AuthUser &&  
            <form onSubmit={handleSubmit}>
            <label> Pridat prispevok: </label>
            <input
                type="text"
                required
                value={ text }
                onChange={(e) => setText(e.target.value)}
            ></input>
            { !isLoading && <button> Odoslat </button>}
            { isLoading && <button disabled> Odosielam... </button>}
            </form>
            }
            
          </div>}
        </div>
      );
}
 
export default Diskusia;