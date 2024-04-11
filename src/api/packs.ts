import {$api} from "./index.ts";
import {ApiTypes} from "./apiTypes.ts";
import {AxiosResponse} from "axios";

export const getPacks = (query: ApiTypes.Packs.Get.Query,) => {
    return $api.get<ApiTypes.Packs.Get.Query, AxiosResponse<ApiTypes.Packs.Get.Resp>>("/cards/pack", {
        params: query,
    })
}

export const createPack = (body: ApiTypes.Packs.Post.Req) => {
    return $api.post<ApiTypes.Packs.Post.Req, AxiosResponse<any>>("/cards/pack", body)
}

export const deletePack = (query:ApiTypes.Packs.Delete.Query) =>{
    return $api.delete<ApiTypes.Packs.Delete.Query>("/cards/pack",{
        params: query,
    })

}

export const updatePack = (body:ApiTypes.Packs.Put.Req) => {
    return $api.put<ApiTypes.Packs.Put.Req>("/cards/pack",body)

}