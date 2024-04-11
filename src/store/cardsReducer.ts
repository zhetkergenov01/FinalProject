import {ApiTypes} from "../api/apiTypes.ts";
import {Dispatch} from "redux";
import {getCards} from "../api/cards.ts";


type GetCardsAT = {
    type: "SET_CARDS",
    cards: ApiTypes.Cards.Get.Resp
}

type SetLoading = {
    type: 'SET_LOADING',
    loading: boolean
}

export type InitialCardsState = {
    cards: null | ApiTypes.Cards.Get.Resp,
    loading: boolean
}

const initialState: InitialCardsState = {
    cards: null,
    loading: false
}

type ActionType = GetCardsAT | SetLoading

export const cardsReducer = (state = initialState, action: ActionType):InitialCardsState => {
    switch (action.type) {
        case "SET_CARDS": {
            return {
                ...state,
                cards: action.cards
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



const getCardsAC = (cards: ApiTypes.Cards.Get.Resp):GetCardsAT => {
    return {type: "SET_CARDS", cards}
}
const setLoadingAC = (loading:boolean) => {
    return{type: "SET_LOADING", loading}
}

export const getCardsTC = (query:ApiTypes.Cards.Get.Query) => {

    return async (dispatch:Dispatch) => {
        try {
            setLoadingAC(true)
            const res = await getCards(query)
            dispatch(getCardsAC(res.data))
        }
        catch (e) {
            console.error(e)
        }
        finally {
            setLoadingAC(false)
        }
    }

}


