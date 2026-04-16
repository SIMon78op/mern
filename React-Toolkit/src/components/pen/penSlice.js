import  { createSlice} from "@reduxjs/toolkit";

const initialState = {
    numOfPens: 20
}

// createSlice is an object that takes key value pairs 
// in reducers here we dont have ti explicitely return the new state 
// we can directly bmuted the state that toolkit hndles the state updation
// create slice automatically create actions creator with te name of reducers 
 
const penSlice = createSlice({
    name: 'pen',
    initialState,
    reducers: {
        orderPen: (state, action) => {
            state.numOfPens = state.numOfPens - action.payload
        }
    }
})

export default penSlice.reducer;
export const {orderPen} = penSlice.actions