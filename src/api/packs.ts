import {$api} from "./index.ts";
import {ApiTypes} from "./apiTypes.ts";
import {AxiosResponse} from "axios";

export const getPacks = (query: ApiTypes.Packs.Get.Query,) => {
    const token = localStorage.getItem("userToken")
    return $api.get<ApiTypes.Packs.Get.Query, AxiosResponse<ApiTypes.Packs.Get.Resp>>("/cards/pack", {
        params: query,
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const createPack = (body: ApiTypes.Packs.Post.Req) => {
    const token = localStorage.getItem("userToken")
    return $api.post<ApiTypes.Packs.Post.Req, AxiosResponse<any>>("/cards/pack", body, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deletePack = (query:ApiTypes.Packs.Delete.Query) =>{
    const token = localStorage.getItem("userToken")
    return $api.delete<ApiTypes.Packs.Delete.Query>("/cards/pack",{
        params: query,
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

}

export const updatePack = (body:ApiTypes.Packs.Put.Req) => {
    const token = localStorage.getItem("userId")
    return $api.put<ApiTypes.Packs.Put.Req>("/cards/pack",body,{
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

}