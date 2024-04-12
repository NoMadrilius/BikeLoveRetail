import {AppState} from "@/dataTransferObjects/internal/AppState";
import {PublicAPI} from "@/api/PublicAPI";
import {CurrenciesAPI} from "@/api/CurrenciesAPI";

export async function loadAppState():Promise<AppState|null>{
    try {
        let shops = PublicAPI.GetShops()
        let cats = PublicAPI.GetCategories()
        let cur = CurrenciesAPI.GetPublic()
        const res:AppState = {shops:(await shops).data, categories:(await cats).data, currencies:(await cur).data}
        return res
    }catch (e){
        return null
    }

}