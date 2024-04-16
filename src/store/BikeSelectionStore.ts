import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {BikeSelectState} from "@/dataTransferObjects/response/BikeSelectState";

class BikeSelectionStore{

    options:BikeSelectState|null = null

    selectedType:{ id: number, name: string }|null = null
    selectedSize:{ id: number, name: string }|null = null

    constructor() {
        makeAutoObservable(this)
    }

    setOptions(v:BikeSelectState){
        this.options = v
    }

    setSelectedType(v:{ id: number, name: string }|null){this.selectedType = v}
    setSelectedSize(v:{ id: number, name: string }|null){this.selectedSize = v}
}

const bikeSelectionStore = new BikeSelectionStore()
const StoreContext = createContext(bikeSelectionStore);

export const useBikeSelectionStore = () => useContext(StoreContext);
export default bikeSelectionStore