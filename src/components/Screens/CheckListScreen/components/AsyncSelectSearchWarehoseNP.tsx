import React from "react";
import AsyncSelect from "react-select/async";

import {NPWarehouseResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPWarehouseResponse";
import {NPRequestWrapper} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPRequestWrapper";
import {NPWarehouseSearchRequest} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPWarehouseSearchRequest";
import {NovaPoshtaAPI} from "@/api/NovaPoshtaAPI";

export const AsyncSelectSearchWarehouseNP = (props: { onSelect: (value: NPWarehouseResponse|null) => void, value: NPWarehouseResponse | null, cityId: string, isDisabled?: boolean }) => {

    const loadOptions = (inputValue: string, callback: (value: NPWarehouseResponse[]) => void) => {
        let request: NPRequestWrapper<NPWarehouseSearchRequest> = {
            apiKey: "b999eaca6863967c372f125b71fe1f67",
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                FindByString: inputValue,
                Limit: "50",
                Language: "UA",
                CityRef: props.cityId
            }
        }

        NovaPoshtaAPI.WarehouseSearch(request).then((resp) => {
            console.log(resp.data.data)
            callback(resp.data.data)
        }).catch((r) => {
            console.log('searchError', r)
        })
    }

    return (
        <div style={{color: 'black'}}>
            <AsyncSelect
                isDisabled={props.isDisabled}
                cacheOptions
                defaultOptions
                isClearable
                value={props.value}
                loadOptions={loadOptions}
                onChange={(r) => {
                    props.onSelect(r as NPWarehouseResponse)
                    console.log('selected', r)
                }}
                getOptionLabel={label => label!.Description}
                getOptionValue={value => value!.Description}
                placeholder={'Пошук відділення'}
                noOptionsMessage={() => 'Відділення не знайдено'}
            />
        </div>
    )
}