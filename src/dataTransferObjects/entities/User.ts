export interface User{
    id: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    firstName: string;
    lastName: string;
    patronymic: string;
    shopId: number;
    isEmployee: boolean;
    bike: string;
    balance: number;
    creditLimit: number;
    created: string;
    updated: string;
    gender: string;
    birth: string;
    language: string;
    lastInteraction: string;
    interactionFail: string;
    unsolvedTasks: boolean;
}