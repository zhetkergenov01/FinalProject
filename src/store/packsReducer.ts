import {createPack, deletePack, getPacks, updatePack} from "../api/packs.ts";
import {ApiTypes} from "../api/apiTypes.ts";
import {Dispatch} from "redux";

type GetPacksAT = {
    type: "SET_PACKS",
    packs: ApiTypes.Packs.Get.Resp
}

type SetFilter = {
    type: 'SET_FILTER',
    filter: Filter
}

type SetLoading = {
    type: 'SET_LOADING',
    loading: boolean
}

export type Filter = 'my' | 'all';

export type InitialPacksState = {
    packs: null | ApiTypes.Packs.Get.Resp,
    filter: Filter,
    loading: boolean
}

const initialState: InitialPacksState = {
    packs: null,
    filter: 'all',
    loading: false
}

type ActionType = GetPacksAT | SetFilter | SetLoading

export const packsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_PACKS": {
            return {
                ...state,
                packs: action.packs
            }
        }
        case "SET_FILTER": {
            return {
                ...state,
                filter: action.filter
            }
        }
        case "SET_LOADING": {
            return {
                ...state,
                loading:action.loading
            }
        }
    }
    return state
}


export const setFilterAC = (filter: Filter) => {
    return {type: 'SET_FILTER', filter}
}
const getPacksAC = (packs: ApiTypes.Packs.Get.Resp) => {
    return {type: "SET_PACKS", packs}
}
const setLoadingAC = (loading:boolean) => {
    return{type: "SET_LOADING", loading}
}

export const getPacksTC = (query: ApiTypes.Packs.Get.Query) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(setLoadingAC(true))
            const res = await getPacks(query)
            dispatch(getPacksAC(res.data))
        } catch (error) {
            console.error(error)
        }
        finally {
            dispatch(setLoadingAC(false))
        }
    }
}

export const createPackTC = (body: ApiTypes.Packs.Post.Req) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(setLoadingAC(true))
            await createPack(body)
            // dispatch<any>(getPacksTC({}))
        } catch (e) {
            console.error(e)
        }
        finally {
            dispatch(setLoadingAC(false))
        }
    }
}

export const deletePackTC = (query: ApiTypes.Packs.Delete.Query) => {
    return async(dispatch:Dispatch)=>{
        try {
            dispatch(setLoadingAC(true))
            await deletePack(query)
            // dispatch<any>(getPacksTC({}))

        }
        catch (e){
            console.error(e)

        }
        finally {
            dispatch(setLoadingAC(false))
        }
    }
}

export const updatePackTC = (body: ApiTypes.Packs.Put.Req) => {
    return async(dispatch:Dispatch) =>{
        try {
            dispatch(setLoadingAC(true))
            await updatePack(body)
            // dispatch<any>(getPacksTC({}))
        }
        catch (e){
            console.error(e)

        }
        finally {
            dispatch(setLoadingAC(false))
        }
    }
}