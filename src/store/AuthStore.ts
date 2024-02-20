import { LoginRequest, RegisterRequest } from "@/types/types";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { apiUrls } from "./apiUrls";
import axios from "axios";
import * as jose from "jose";
import { showToast } from "@/helpers/alertService/alertService";
import Router from "next/router";
import axiosInstance from "@/api/axiosInstance";
import { CONFIG } from "../../config";

class AuthStore {
  registerUserResponse: any = {};
  loadingRegister: boolean = false;
  loginUserResponse: any = {};
  loadingLogin: boolean = false;
  tokenIsRefresh: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  register = async (request: RegisterRequest, noRelocate?: boolean) => {
    const loginRequest = {
      phone: request.phone,
      password: request.password,
    };
    try {
      this.loadingRegister = true;

      const response = await axios.post("/api/register", request);
      this.registerUserResponse = { ...response.data };

      await this.login(loginRequest);

      if (typeof localStorage !== "undefined") {
        if (typeof response.data.user !== "undefined") {
          localStorage.setItem(
            "RegistrationStore",
            JSON.stringify({ ...response.data })
          );

          if (!noRelocate) {
            Router.push("/");
          }
          showToast({
            info: "Удачных покупок :)",
            title: "Аккаунт создан",
            type: "success",
          });
          this.loadingRegister = false;
          return response.data;
        } else {
          console.error("Error fetching data:");
        }
      }
    } catch (error: any) {
      showToast({
        info: error.message,
        title: "Ошибка",
        type: "error",
      });
      this.loadingRegister = false;
    }
  };
  login = async (request: LoginRequest, noRelocate?: boolean) => {
    try {
      this.loadingLogin = true;
      console.log(request);
      const response = await axiosInstance.post("/auth/login", request, {
        withCredentials: true,
      });
      this.loginUserResponse = { ...response.data };
      showToast({
        info: "Вітаємо",
        title: "Вхід виконано",
        type: "success",
      });
      this.checkAuth();
      if (!noRelocate) {
        Router.push("/");
      }

      this.loadingLogin = false;

      if (typeof localStorage !== "undefined") {
        if (typeof response.data.accessToken !== "undefined") {
          const result = {
            accessTokenDetail: jose.decodeJwt(response.data.accessToken),
            ...response.data,
          };

          localStorage.setItem("AuthStore", JSON.stringify(result));
          return result;
        } else {
          showToast({
            info: "Неправильний логін або пароль",
            title: "Вхід не виконано",
            type: "error",
          });
          this.loadingLogin = false;
        }
      }
    } catch (error) {
      showToast({
        info: "Неправильний логін або пароль",
        title: "Вхід не виконано",
        type: "error",
      });
      this.loadingLogin = false;
    }
  };
  logout = async () => {
    try {
      const response = await axiosInstance.post("/auth/logout", null, {
        withCredentials: true,
      });
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("AuthStore");
      }

      await Router.push("/");
      this.loginUserResponse = {};
      this.tokenIsRefresh++;
    } catch (error) {
      console.log(error);
    }
  };
  refreshToken = async () => {
    try {
      // Проверяем, доступен ли localStorage
      if (typeof localStorage === "undefined") {
        console.error("localStorage is not available.");
        return;
      }
      console.log("success");

      // Получаем текущий токен из localStorage
      const storedJson = localStorage.getItem("AuthStore");
      const authStoreData = storedJson ? JSON.parse(storedJson) : {};

      // Отправляем запрос на обновление токена с текущим токеном в куке
      if (!authStoreData) {
        return;
      }
      console.log("success");
      const response = await axiosInstance.post(`/auth/refresh`, null, {
        withCredentials: true,
      });
      this.tokenIsRefresh++;

      if (typeof response.data.accessToken !== "undefined") {
        // Обновляем только нужные поля
        authStoreData.accessTokenDetail = jose.decodeJwt(
          response.data.accessToken
        );
        authStoreData.accessToken = response.data.accessToken;

        // Сохраняем обновленное значение в localStorage
        localStorage.setItem("AuthStore", JSON.stringify(authStoreData));

        return authStoreData;
      } else {
        showToast({
          info: "Авторизуйтесь знову",
          title: "Сесія застаріла",
          type: "error",
        });
        this.loadingLogin = false;
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  selfUpdate = async (requestBody: any) => {
    let token;
    if (typeof localStorage !== "undefined") {
      const auth = localStorage.getItem("AuthStore");
      const authToken = JSON.parse(auth!) || "";
      token = authToken.accessToken;
    }
    try {
      const response = await axios.put("/api/updateSelfInfo", {
        token,
        requestBody,
      });

      this.loginUserResponse.user = response.data;
      if (typeof localStorage !== "undefined") {
        const storedJson = localStorage.getItem("AuthStore");
        const authStoreData = storedJson ? JSON.parse(storedJson) : {};

        authStoreData.user = {
          ...authStoreData.user,
          ...response.data,
        };
        localStorage.setItem("AuthStore", JSON.stringify(authStoreData));
      }

      showToast({
        info: "Ваші особисті дані успішно змінено",
        title: "Успіх",
        type: "success",
      });
    } catch (error) {
      console.log("erorr");
      showToast({
        info: "Щось пішло не так :(",
        title: "Помилка",
        type: "error",
      });
    }
  };

  readAuth = () => {
    if (typeof localStorage !== "undefined") {
      const storedJson = localStorage.getItem("AuthStore");

      if (storedJson) {
        Object.assign(this.loginUserResponse, JSON.parse(storedJson));
      }
    }
  };

  checkAuth = () => {
    this.readAuth();

    if (typeof authStore.loginUserResponse.accessTokenDetail !== "undefined") {
      const currentTime = Math.ceil(+new Date() / 1000);

      console.log(currentTime);
      console.log(authStore.loginUserResponse.accessTokenDetail.exp);
      console.log(
        authStore.loginUserResponse.accessTokenDetail.exp - currentTime
      );

      if (currentTime < authStore.loginUserResponse.accessTokenDetail.exp) {
        return true;
      }

      return false;
    }
  };

  getLoginUserResponse() {
    if (this.checkAuth()) {
      return this.loginUserResponse?.user?.id;
    } else {
      return (this.loginUserResponse = {});
    }
  }
}

const authStore = new AuthStore();
const StoreContext = createContext(authStore);

export const useAuthStore = () => useContext(StoreContext);
export default authStore;
