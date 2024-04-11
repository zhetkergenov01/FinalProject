import {login, registration} from "../api/auth.ts";
import {NavigateFunction} from "react-router-dom";
import {ApiTypes} from "../api/apiTypes.ts";
import {Dispatch} from "redux";

type LoginAT = {
    type: "LOGIN",
    data:ApiTypes.Login.Resp
}

type ForgotPasswordAT = {
    type: "FORGOT_PASSWORD",

}

type ActionType = LoginAT | ForgotPasswordAT

export type InitialStateAuth = {
    isAuth: boolean,
    user: ApiTypes.Login.Resp
}

const initialState:InitialStateAuth = {
    isAuth: false,
    user: {}as ApiTypes.Login.Resp,
}

export const authReducer = (state=initialState, action: ActionType)=> {
    switch(action.type) {
        case "LOGIN": {
            return {...state,user:action.data}
        }
        case "FORGOT_PASSWORD": {
            return state
        }
        default: return state
    }
}

export const loginAC = (data:ApiTypes.Login.Resp):LoginAT => {
    return {type:"LOGIN", data}
}

export const registerTC = (body:{email: string, password: string}, navigate: NavigateFunction) => {
    return async () => {
        try {
            await registration(body)
            navigate('/login')
        }
        catch (e){
            console.error(e)
        }
    }
}
export const loginTC = (data:ApiTypes.Login.Req, navigate:NavigateFunction) =>{
    return async (dispatch: Dispatch) => {
        try{
            const response= await login(data)
            localStorage.setItem("userId",response.data._id)
            localStorage.setItem("userToken",response.data.token)
            dispatch(loginAC(response.data))
            navigate('/pack-list')
        }
        catch (e){
            console.error(e)
        }
    }
}

// export const forgotPasswordTC = (body: {email:string},) =>{
//     return async () =>{
//         try{
//              await forgotPassword(body)
//         }
//         catch (e){
//             console.error(e)
//         }
//     }
// }