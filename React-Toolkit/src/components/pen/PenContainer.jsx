import { useDispatch, useSelector } from "react-redux"
import { orderPen } from "./penSlice"
import { useState } from "react"


const PenContainer =  () => {

    const numOfPens = useSelector(state => state.pen.numOfPens)
    console.log(numOfPens);

    const [numberOfPens, setNumberOfPens] = useState(1);

    const dispatch = useDispatch();

    return (
        <div>
       <h1>Pens: {numOfPens}</h1>
       <input type="number" onChange={(e)=>setNumberOfPens(e.target.value)} />
       <button onClick={() => dispatch(orderPen(numberOfPens))}>Buy Pens</button>
       </div>
)
}

export default PenContainer