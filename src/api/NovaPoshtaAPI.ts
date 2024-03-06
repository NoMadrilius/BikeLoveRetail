import {AxiosResponse} from "axios";
import {NPRequestWrapper} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPRequestWrapper";
import {NPCitySearchRequest} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPCitySearchRequest";
import {NPCityResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPCityResponse";
import {NPResponseWrapper} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPResponseWrapper";
import {NPWarehouseSearchRequest} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPWarehouseSearchRequest";
import {NPWarehouseResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPWarehouseResponse";
import $NovaPoshtaApi from "@/api/NovaPoshta";


export const NovaPoshtaAPI = {
    CitySearch(dto: NPRequestWrapper<NPCitySearchRequest>): Promise<AxiosResponse<NPResponseWrapper<NPCityResponse>>> {
        return (
            $NovaPoshtaApi.post<NPResponseWrapper<NPCityResponse>>(``, dto)
        )
    },
    WarehouseSearch(dto: NPRequestWrapper<NPWarehouseSearchRequest>): Promise<AxiosResponse<NPResponseWrapper<NPWarehouseResponse>>> {
        return (
            $NovaPoshtaApi.post<NPResponseWrapper<NPWarehouseResponse>>(``, dto)
        )
    },
}