import {combineReducers, createStore, applyMiddleware} from "redux";
import {authReducer} from "./authReducer.ts";
import {thunk} from "redux-thunk";
import {packsReducer} from "./packsReducer.ts";

const combinedReducers = combineReducers({
    auth: authReducer,
    packs: packsReducer
})

export const store = createStore(combinedReducers, undefined, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store

