"use client"
import React from "react";
import AsyncSelect from "react-select/async";
import {NPCityResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPCityResponse";
import {NPRequestWrapper} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPRequestWrapper";
import {NPCitySearchRequest} from "@/dataTransferObjects/internal/NovaPoshta/Request/NPCitySearchRequest";
import {NovaPoshtaAPI} from "@/api/NovaPoshtaAPI";
import { useTranslation } from "next-i18next";

export const AsyncSelectSearchCityNP = (props: { onSelect: (value: NPCityResponse|null) => void, value: NPCityResponse | null, isDisabled?: boolean }) => {
    const { t } = useTranslation('checkout_page');
    const loadOptions = (inputValue: string, callback: (value: NPCityResponse[]) => void) => {
        let request: NPRequestWrapper<NPCitySearchRequest> = {
            apiKey: "099d9e9b0d28f7d57cdcfaa4e9ca9af2",
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
                placeholder={t("Оберіть місто")}
                noOptionsMessage={() => t("Місто не знайдено")}
            />
        </div>
    )
}