import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { showToast } from "@/helpers/alertService/alertService";
import Router from "next/router";
import {makePersistable} from "mobx-persist-store";
import {User} from "@/dataTransferObjects/entities/User";
import {RegisterRequest} from "@/dataTransferObjects/request/RegisterRequest";
import {AuthAPI} from "@/api/AuthAPI";
import {LoginRequest} from "@/dataTransferObjects/request/LoginRequest";
import {SelfUpdateRequest} from "@/dataTransferObjects/request/SelfUpdateRequest";
import {UserAPI} from "@/api/UserAPI";
import i18next from "i18next";

class AuthStore {
  isAuth:boolean = false;
  user:User|null = null;

  accessToken:string|null=null;
  loading: boolean = false;

  /// Login Data
  loginPhone = ""
  loginPassword = ""

  /// Register Data
  regName= ""
  regLastName= ""
  regPatronymic= ""
  regEmail= ""
  regPhone= ""
  regPassword= ""
  regConfirmPassword= ""

  step = 0

  emailError = false
  passwordsError = false

  constructor() {
    makeAutoObservable(this);
    if(typeof window !== "undefined"){
      makePersistable(this, {
        name: "authStore",
        properties: ["isAuth", "user", "accessToken", "step"],
        storage:window.localStorage
      }).finally(()=>{
        this.initialize()
      });

    }
  }

  initialize(){
    console.log('authIniting', this.isAuth)
    if(this.isAuth){
      UserAPI.GetSelf().then(r=>{
        console.log('uodRes:',r)
        this.user = r.data
      }).catch(()=>{
        //this.isAuth = false
      })
    }
  }

  register = async (noRelocate?: boolean) => {

    const validateEmail = (email: string) => {
      const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegExp.test(email);
    };

    if (this.regPassword !== this.regConfirmPassword) {
      this.passwordsError = true
      setTimeout(() => {
        this.passwordsError = false
      }, 3000);
      return showToast({
        info: i18next.t("auth.toast.passwordError"),
        title: i18next.t("auth.toast.error"),
        type: "error",
      });
    }
    if (!validateEmail(this.regEmail)) {
      this.emailError = true
      setTimeout(() => {
        this.emailError = false
      }, 3000);
      return showToast({
        info: i18next.t("auth.toast.emailError"),
        title: i18next.t("auth.toast.error"),
        type: "error",
      });
    }

    let request:RegisterRequest = {
      firstName: this.regName,
      lastName: this.regLastName,
      patronymic: this.regPatronymic,
      email: this.regEmail,
      phone: this.regPhone.replace(/\s/g, ""),
      password: this.regPassword
    }

    this.loading = true;
    await AuthAPI.Register(request).then(r=>{
      this.isAuth = true
      this.user = r.data.user
      this.accessToken = r.data.accessToken
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
  login = async (noRelocate?: boolean) => {
    let request:LoginRequest  ={
      phone:this.loginPhone.replace(/\s/g, ""),
      password:this.loginPassword
    }
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
    AuthAPI.Refresh().then(r=>{
      this.accessToken = r.data.accessToken
      this.isAuth = true
      this.loading = true
      return Promise.resolve(r)
    }).catch(e=>{
      //this.isAuth = false
      //this.accessToken = null
      showToast({
        info: "Сессия устарела, повторите вход",
        title: "Войдите",
        type: "error",
      });
      return Promise.reject(e)
    }).finally(()=>{this.loading = false})
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

  setLoginPhone(v:string){this.loginPhone = v}
  setLoginPassword(v:string){this.loginPassword = v}

  setRegName(v:string){this.regName = v}
  setRegLastName(v:string){this.regLastName = v}
  setRegPatronymic(v:string){this.regPatronymic = v}
  setRegEmail(v:string){this.regEmail = v}
  setRegPhone(v:string){this.regPhone = v}
  setRegPassword(v:string){this.regPassword = v}
  setRegConfirmPassword(v:string){this.regConfirmPassword = v}

  setStep(v:number){this.step = v}
}

const authStore = new AuthStore();
const StoreContext = createContext(authStore);

export const useAuthStore = () => useContext(StoreContext);
export default authStore;
