import { configureStore } from "@reduxjs/toolkit";

//middleware
//middleware is defined after reducer inside configuration
//the middleware prop takes a callback function and that function takes getDefaultMiddleeware as arg
//after that we concat the middleware to this function

import penReducer from "../components/pen/penSlice"

import noteBookReducer from "../components/notebook/notebookSlice"

const logger = createLogger();

const store = configureStore({
    reducer: {
        pen: penReducer,
        notebook: noteBookReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})


// const store = configureStore({
//     reducer: {
//         notebook: notebookReducer
//     }
// })

export default store