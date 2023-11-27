import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'; // pour l'async
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
 }); 

export default store;
