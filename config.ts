type RunMode = 'DEV' | 'PROD';

const RUN_MODE: RunMode = 'PROD';

const BASE_URL = {
  DEV: 'http://localhost:3000/',
  PROD: 'https://bike-love-retail.vercel.app/',
};

const AUTH0_REDIRECT = BASE_URL[RUN_MODE]; 

export const CONFIG = {
  BASE_URL: BASE_URL,
  AUTH0: {
    domain: "dev-68z2y7mawqceinob.us.auth0.com",
    clientId: "SQW7DX7Ok57bOW0ZP0hLH0P7PGUb9Dd6",
    redirect: AUTH0_REDIRECT, 
  },
} as const;

