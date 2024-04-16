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