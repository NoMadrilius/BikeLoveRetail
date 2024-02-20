// pages/api/refreshToken.ts

import axiosInstance from "@/api/axiosInstance";
import { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await axiosInstance.post(`/auth/refresh`, null, {
        withCredentials: true,
      });
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as AxiosError;
      res.status(500).json({ err: err });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
