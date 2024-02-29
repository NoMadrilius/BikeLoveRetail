import React, {ReactElement} from 'react';
import AuthStore from "@/store/AuthStore";
import axiosInstance from "@/api/axiosInstance";
import {useRouter} from "next/router";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const HttpProvider = (p: { children: ReactElement }) => {


    return p.children;
};

export default HttpProvider;