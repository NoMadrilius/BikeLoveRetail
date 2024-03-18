import {AppState} from "@/dataTransferObjects/internal/AppState";
import {PublicAPI} from "@/api/PublicAPI";

export async function loadAppState():Promise<AppState>{
    let shops = PublicAPI.GetShops()
    let cats = PublicAPI.GetCategories()
    const res:AppState = {shops:(await shops).data, categories:(await cats).data}
    return res
}