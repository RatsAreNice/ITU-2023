const Zaujemci = ( { zaujemci } ) => {
    //const { data, isPending, Error} = useFetch('http://localhost:8000/udalost/' + id + '?_embed=zaujemca');

    return (
        <div className="homeq">
          { zaujemci && 
          <div className="zauzaujemci1">
            <h2>Záujemci:</h2>
            {zaujemci.map((zaujem) => (
              <div className="zauzaujemci1" key={zaujem.id} >
                <div className="Zaujemca"> {zaujem.user} </div> 
              </div>
            ))
            }
          </div>}
        </div>
      );
}
 
export default Zaujemci;