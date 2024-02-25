import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import axios from "axios";
import * as jose from "jose";
import { showToast } from "@/helpers/alertService/alertService";
import Router from "next/router";
import axiosInstance from "@/api/axiosInstance";
import {makePersistable} from "mobx-persist-store";
import {User} from "@/dataTransferObjects/entities/User";
import {RegisterRequest} from "@/dataTransferObjects/request/RegisterRequest";
import {AuthAPI} from "@/api/AuthAPI";
import {LoginRequest} from "@/dataTransferObjects/request/LoginRequest";
import {SelfUpdateRequest} from "@/dataTransferObjects/request/SelfUpdateRequest";
import {UserAPI} from "@/api/UserAPI";

class AuthStore {
  isAuth:boolean = false;
  user:User|null = null;

  accessToken:string|null=null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    if(typeof window !== "undefined")
    makePersistable(this, {
      name: "authStore",
      properties: ["isAuth", "user"],
      storage:window.localStorage
    });
  }

  register = async (request: RegisterRequest, noRelocate?: boolean) => {
    this.loading = true;
    await AuthAPI.Register(request).then(r=>{
      //this.user = r.data.user
      if (!noRelocate) {
        Router.push("/");
      }
      showToast({
        info: "Удачных покупок :)",
        title: "Аккаунт создан",
        type: "success",
      });
    }).catch((error)=>{
      showToast({
        info: error.message,
        title: "Ошибка",
        type: "error",
      });
    }).finally(()=>{
      this.loading = false
    })

  };
  login = async (request: LoginRequest, noRelocate?: boolean) => {
    this.loading = true
    await AuthAPI.Login(request).then(r=>{
      this.isAuth = true
      this.user = r.data.user
      this.accessToken = r.data.accessToken
      if (!noRelocate) {
        Router.push("/");
      }
      showToast({
        info: "Вітаємо",
        title: "Вхід виконано",
        type: "success",
      });
    }).catch(e=>{
      showToast({
        info: "Неправильний логін або пароль",
        title: "Вхід не виконано",
        type: "error",
      });
    }).finally(()=>{
      this.loading = false
    })

  };
  logout = async () => {
    await AuthAPI.Logout().finally(()=>{
      this.isAuth = false
      Router.push("/");
    })
  };
  refreshToken = async () => {
    await AuthAPI.Refresh().then(r=>{
      this.accessToken = r.data.accessToken
      this.isAuth = true
      this.loading = true
    }).catch(e=>{
      this.isAuth = false
      this.accessToken = null
    }).finally(()=>{this.loading = false})
    /*
    showToast({
      info: "Авторизуйтесь знову",
      title: "Сесія застаріла",
      type: "error",
    });
     */
  };

  selfUpdate = async (request: SelfUpdateRequest) => {
    this.loading = true
    await UserAPI.SelfUpdate(request).then(r=>{
      this.user = r.data
      showToast({
        info: "Ваші особисті дані успішно змінено",
        title: "Успіх",
        type: "success",
      });
    }).catch(()=>{
      showToast({
        info: "Щось пішло не так :(",
        title: "Помилка",
        type: "error",
      });
    }).finally(()=>this.loading = false)
  };

}

const authStore = new AuthStore();
const StoreContext = createContext(authStore);

export const useAuthStore = () => useContext(StoreContext);
export default authStore;
