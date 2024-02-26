import {AxiosResponse} from "axios";
import {User} from "@/dataTransferObjects/entities/User";
import axiosInstance from "@/api/axiosInstance";
import {SelfUpdateRequest} from "@/dataTransferObjects/request/SelfUpdateRequest";

export const UserAPI = {
    SelfUpdate(data:SelfUpdateRequest):Promise<AxiosResponse<User>>{
        return axiosInstance.put("/user/selfupdate",data);
    }
}