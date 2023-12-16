import { useEffect, useState } from "react"

const Filters = ( {data, setNewData, fetchAgain} ) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    const [Fstart_date, setStart_date] = useState(`${year}-${month}-${date}`)
    const [Fend_date, setEnd_date] = useState(`${year+1}-${month}-${date}`)
    const [Fstart_time, setStart_time] = useState("00:00")
    const [Fend_time, setEnd_time] = useState("23:59")
    const [Fkategoria, setKategoria] = useState("Kategoria")

    const newData = data.filter(event => event.start_date >= Fstart_date) 

    const newData2 = newData.filter((event => (event.start_date !== Fstart_date) || (event.start_time >= Fstart_time)))

    const newData3 = newData2.filter(event => event.start_date <= Fend_date)

    const newData4 = newData3.filter((event => (event.start_date !== Fend_date) || (event.start_time <= Fstart_time)))

    let newData5 = null

    if (Fkategoria !== "Kategoria"){
        newData5 = newData4.filter((event => event.kategoria === Fkategoria))
    }else{
        newData5 = newData4
    }
        

    useEffect(() => {
        setNewData(newData5);
    }, [Fstart_date, Fend_date, Fstart_time, Fend_time, Fkategoria, data])

    return ( 
        <div className="filters">
            <h1>Filtre</h1>
            <form>
                <label>Cas od: </label>
                <input type="time" value={Fstart_time} onChange={(e) => setStart_time(e.target.value)}></input>
                <label>Cas do: </label>
                <input type="time" value={Fend_time} onChange={(e) => setEnd_time(e.target.value)}></input>
                <label>Datum od: </label>
                <input type="date" value={Fstart_date} onChange={(e) => setStart_date(e.target.value)}></input>
                <label>Datum do: </label>
                <input type="date" value={Fend_date} onChange={(e) => setEnd_date(e.target.value)}></input>

                <label> Kategoria: </label>
                <select
                value={Fkategoria}
                onChange={(e) => setKategoria(e.target.value)}
                >
                <option value={"Kategoria"}>Kategoria</option>
                <option value={"Sport"}>Sport</option>
                <option value={"Zabava"}>Zabava</option>
                <option value={"Doskove hry"}>Doskove hry</option>
                <option value={"Konicky"}>Konicky</option>
                <option value={"Ine"}>Ine</option>
                </select>
            </form>
        </div>
     );
}
 
export default Filters;