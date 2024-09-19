import appStore from "@/store/AppStore";
import currencyStore from "@/store/CurrencyStore";
import bikeSelectionStore from "@/store/BikeSelectionStore";
import { AppState } from "@/dataTransferObjects/internal/AppState";

export const setStateBase = (p:AppState)=>{

    appStore.setServerData(p)
    currencyStore.setServerData(p)
    bikeSelectionStore.setOptionsServer(p.bikeSelectState)


}