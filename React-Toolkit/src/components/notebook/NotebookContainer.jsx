import { useDispatch, useSelector } from "react-redux"
import { orderNotebook } from "./notebookSlice"
import { useState } from "react"


const NotebookContainer =  () => {

    const numOfNotebook = useSelector(state => state.notebook.numOfNotebooks)
    console.log(numOfNotebook);

    const [numberOfNotebook, setNumberOfNotebook] = useState(1);

    const dispatch = useDispatch();

    return (
        <div>
       <h1>Notebooks: {numOfNotebook}</h1>
       <input type="number" onChange={(e)=>setNumberOfNotebook(e.target.value)} />
       <button onClick={() => dispatch(orderNotebook(numberOfNotebook))}>Buy Notebooks</button>
       </div>
)
}

export default NotebookContainer