import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {BikeSelectState} from "@/dataTransferObjects/response/BikeSelectState";
import {PublicAPI} from "@/api/PublicAPI";
import {BikeSelectCountRequest} from "@/dataTransferObjects/request/BikeSelectCountRequest";

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
        this.selectedBrand = v
        this.updateCount()
    }

    checkActive(){
        if(this.selectedType != null && this.selectedSize != null) this.active = true
        else this.active = false
    }

    updateCount(){
        let data:BikeSelectCountRequest = {}
        if(this.selectedType) data.type = this.selectedType.id
        if(this.selectedSize) data.size = this.selectedSize.id
        if(this.selectedBrand) data.brand = this.selectedBrand.id
        if(this.max) data.startPrice = this.min
        if(this.min) data.finishPrice = this.max

        PublicAPI.BikeSelectorCount(data).then(r=>{
            this.count = r.data
        })
    }

    setMax(v:string){
        const regex = /^[0-9]*$/;

        // Check if the input value matches the regex
        if (regex.test(v)) {
            this.max =parseFloat(v);
        }
        this.updateCount()

    }
    setMin(v:string){
        const regex = /^[0-9]*$/;

        // Check if the input value matches the regex
        if (regex.test(v)) {
            this.min =parseFloat(v);
        }
        this.updateCount()

    }
}

const bikeSelectionStore = new BikeSelectionStore()
const StoreContext = createContext(bikeSelectionStore);

export const useBikeSelectionStore = () => useContext(StoreContext);
export default bikeSelectionStore