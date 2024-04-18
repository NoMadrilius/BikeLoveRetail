import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {BikeSelectState} from "@/dataTransferObjects/response/BikeSelectState";
import {PublicAPI} from "@/api/PublicAPI";

class BikeSelectionStore{

    options:BikeSelectState|null = null

    selectedType:{ id: number, name: string }|null = null
    selectedSize:{ id: number, name: string }|null = null
    selectedBrand:{ id: number, name: string }|null = null

    active=false

    count = 0

    max=0
    min=0

    constructor() {
        makeAutoObservable(this)
    }

    setOptions(v:BikeSelectState){
        this.options = v
    }

    setSelectedType(v:{ id: number, name: string }|null){
        this.selectedType = v
        this.checkActive()
        this.updateCount()
    }
    setSelectedSize(v:{ id: number, name: string }|null){
        this.selectedSize = v
        this.checkActive()
        this.updateCount()
    }

    setSelectedBrand(v:{ id: number, name: string }|null){
        this.selectedSize = v
        this.updateCount()
    }

    checkActive(){
        if(this.selectedType != null && this.selectedSize != null) this.active = true
        else this.active = false
    }

    updateCount(){
        /*
        if(false)
        PublicAPI.BikeSelectorCount(r=>{
            this.count = r.data
        })

         */
    }

    setMax(v:string){
        const regex = /^[0-9]*$/;

        // Check if the input value matches the regex
        if (regex.test(v)) {
            this.max =parseFloat(v);
        }

    }
    setMin(v:string){
        const regex = /^[0-9]*$/;

        // Check if the input value matches the regex
        if (regex.test(v)) {
            this.max =parseFloat(v);
        }
    }
}

const bikeSelectionStore = new BikeSelectionStore()
const StoreContext = createContext(bikeSelectionStore);

export const useBikeSelectionStore = () => useContext(StoreContext);
export default bikeSelectionStore