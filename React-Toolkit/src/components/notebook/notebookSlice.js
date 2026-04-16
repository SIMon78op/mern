import  { createSlice} from "@reduxjs/toolkit";

const initialState = {
    numOfNotebooks: 20
}

// createSlice is an object that takes key value pairs 
// in reducers here we dont have ti explicitely return the new state 
// we can directly bmuted the state that toolkit hndles the state updation
// create slice automatically create actions creator with te name of reducers 
 
const notebookSlice = createSlice({
    name: 'notebook',
    initialState,
    reducers: {
        orderNotebook: (state, action) => {
            state.numOfNotebooks = state.numOfNotebooks - action.payload
        }
    }
})

export default notebookSlice.reducer;
export const {orderNotebook} = notebookSlice.actions