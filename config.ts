type RunMode = "DEV" | "PROD" | "PRODLOCAL";

const RUN_MODE: RunMode = "PROD";

const BASE_URL_SERVER = {
  DEV: "https://bikeshop.1gb.ua/api",
  PROD: "http://host.docker.internal:5000/api",
  PRODLOCAL: "https://api.bikelove.com.ua/api",
};
const BASE_URL = {
  DEV: "https://bikeshop.1gb.ua/api",
  PROD: "https://api.bikelove.com.ua/api",
  PRODLOCAL: "https://api.bikelove.com.ua/api",
};
const IMG_URL = {
  DEV: "http://localhost:3000/",
  PROD: "https://bike-love-retail.vercel.app/",
  PRODLOCAL: "https://bike-love-retail.vercel.app/",
};

const AUTH0_REDIRECT = BASE_URL[RUN_MODE];

export const CONFIG = {
  BASE_URL_SERVER:BASE_URL_SERVER[RUN_MODE],
  BASE_URL: BASE_URL[RUN_MODE],
  IMG_URL: IMG_URL[RUN_MODE],
  AUTH0: {
    domain: "dev-68z2y7mawqceinob.us.auth0.com",
    clientId: "SQW7DX7Ok57bOW0ZP0hLH0P7PGUb9Dd6",
    redirect: AUTH0_REDIRECT,
  },
} as const;
