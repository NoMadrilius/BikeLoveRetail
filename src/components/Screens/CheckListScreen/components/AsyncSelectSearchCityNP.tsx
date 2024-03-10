"use client"
import React from "react";
import AsyncSelect from "react-select/async";
import {NPCityResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPCityResponse";
import {NPRequestWrapper} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPRequestWrapper";
import {NPCitySearchRequest} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPCitySearchRequest";
import {NovaPoshtaAPI} from "@/api/NovaPoshtaAPI";

export const AsyncSelectSearchCityNP = (props: { onSelect: (value: NPCityResponse|null) => void, value: NPCityResponse | null, isDisabled?: boolean }) => {

    const loadOptions = (inputValue: string, callback: (value: NPCityResponse[]) => void) => {
        let request: NPRequestWrapper<NPCitySearchRequest> = {
            apiKey: "b999eaca6863967c372f125b71fe1f67",
            modelName: "Address",
            calledMethod: "getCities",
            methodProperties: {
                FindByString: inputValue,
                Limit: "50",
                Language: "UA"
            }
        }

        NovaPoshtaAPI.CitySearch(request).then((resp) => {
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
                value={props.value!}
                loadOptions={loadOptions}
                onChange={(r) => {
                    props.onSelect(r as NPCityResponse)
                }}
                getOptionLabel={label => label!.Description}
                getOptionValue={value => value!.Description}
                placeholder={'Оберіть місто'}
                noOptionsMessage={() => 'Місто не знайдено'}
            />
        </div>
    )
}