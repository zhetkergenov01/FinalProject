import {ApiTypes} from "./apiTypes.ts";
import {$api} from "./index.ts";
import {AxiosResponse} from "axios";

export const getCards = (query: ApiTypes.Cards.Get.Query) => {
    return $api.get<ApiTypes.Cards.Get.Query, AxiosResponse<ApiTypes.Cards.Get.Resp>>("/cards/card", {
        params: query,
    })
}
export const createCard = (body: ApiTypes.Cards.Post.Req) => {
    return $api.post<ApiTypes.Cards.Post.Req>("/cards/card", body)
}

export const deleteCard = (id: string) => {
    return $api.delete<ApiTypes.Cards.Delete.Query>(`/cards/card?id=${id}`)
}

export const updateCard = (body: ApiTypes.Cards.Put.Req) => {
    return $api.put<ApiTypes.Cards.Put.Req>("/cards/card",body)
}