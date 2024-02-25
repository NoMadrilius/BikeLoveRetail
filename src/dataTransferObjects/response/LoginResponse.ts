import {User} from "@/dataTransferObjects/entities/User";

export interface LoginResponse{
    accessToken: string;
    user: User;
}