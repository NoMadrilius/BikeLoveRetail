import React, {ReactElement} from 'react';
import AuthStore, {useAuthStore} from "@/store/AuthStore";
import axiosInstance from "@/api/axiosInstance";
import {useRouter} from "next/router";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import authStore from "@/store/AuthStore";
import {observer} from "mobx-react";

const HttpProvider = (p: { children: ReactElement }) => {

    return p.children;
};

export default observer(HttpProvider);