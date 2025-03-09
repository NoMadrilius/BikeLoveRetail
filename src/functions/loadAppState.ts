import {AppState} from "@/dataTransferObjects/internal/AppState";
import {PublicAPI} from "@/api/PublicAPI";
import {CurrenciesAPI} from "@/api/CurrenciesAPI";

export async function loadAppState():Promise<AppState|null>{
    try {
        return (await PublicAPI.GetState()).data
    }catch (e){
        return null
    }

}

export async function loadAppState2(locale?:string, currencyId?:number):Promise<AppState|null>{
    try {
        return (await PublicAPI.GetState2(locale, currencyId)).data
    }catch (e){
        return null
    }

}