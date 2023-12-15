const Zaujemci = ( { zaujemci } ) => {
    //const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id + '?_embed=zaujemca');

    return (
        <div className="home">
          { zaujemci && 
          <div className="udalosti">
            <h1>Zaujemci:</h1>
            {zaujemci.map((zaujem) => (
              <div className="udalosti-preview" key={zaujem.id} >
                <h1> {zaujem.user} </h1>
              </div>
            ))
            }
          </div>}
        </div>
      );
}
 
export default Zaujemci;