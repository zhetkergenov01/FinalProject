export namespace ApiTypes {
    export namespace Login {
        export type Req = {
            email: string
            password: string
            rememberMe?: boolean
        }

        export type Resp = {
            _id: string;
            email: string;
            name: string;
            avatar?: string;
            publicCardPacksCount: number;
            created: Date;
            updated: Date;
            isAdmin: boolean;
            verified: boolean;
            rememberMe: boolean;
            error?: string;
            __v: number,
            token: string,
            tokenDeathTime: number
        }
    }
    export namespace Register {
        export type Req = {
            email: string;
            password: string;
        }
        export type Resp = {
            addedUser: {}
            error?: string
        }
    }
    export namespace SetNewPassword {
        export type Req = {
            password: string
            resetPasswordToken: string
        }
        export type Resp = {
            info: string
            error: string
        }
    }
    export namespace ForgotPassword {
        export type Req = {
            email: string
            from: string
            message: string
        }
        export type Resp = {
            info: string
            error: string;
        }
    }
    export namespace AuthMe {
        export namespace Post {
            export type Req = {}
            export type Resp = {
                _id: string;
                email: string;
                name: string;
                avatar?: string;
                publicCardPacksCount: number; // количество колод

                created: Date;
                updated: Date;
                isAdmin: boolean;
                verified: boolean; // подтвердил ли почту
                rememberMe: boolean;

                error?: string;
            }
        }
        export namespace Put {
            export type Req = {
                name: string,
                avatar: string // url or base64
            }
            export type Resp = {
                updatedUser: Login.Resp
                error?: string
            }
        }
    }
    export namespace Packs {
        export namespace Get {
            export type Query = {
                packName?: string;
                min?: number
                max?: number
                sortPacks?: number
                page?: number
                pageCount?: number
                user_id?: string
            }
            export type CardPack = {
                _id: string,
                user_id: string,
                user_name: string,
                "private": boolean,
                "name": string,
                "path": string,
                "grade": number,
                "shots": number,
                "cardsCount": number,
                "type": string,
                "rating": number,
                "created": string,
                "updated": string,
                "more_id": string,
                "__v": number,
                "deckCover": null
            }
            export type Resp = {
                "cardPacks": CardPack[],
                "page": number,
                "pageCount": number,
                "cardPacksTotalCount": number,
                "minCardsCount": number,
                "maxCardsCount": number,
                "token": string,
                "tokenDeathTime": number
            }
        }
        export namespace Post {
            export type Req = {
                cardsPack: {
                    name: string  // если не отправить будет таким
                    path?: string// если не отправить будет такой
                    grade?: number // не обязателен
                    shots?: number // не обязателен
                    rating?: number // не обязателен
                    deckCover: string // не обязателен
                    private: boolean // если не отправить будет такой
                    type?: string // если не отправить будет таким
                }
            }
        }
        export namespace Delete {
            export type Query = {
                id: string

            }
        }
        export namespace Put {
            export type Req ={
                cardsPack:{
                    _id:string,
                    name?:string
                }
            }
        }

    }
}



