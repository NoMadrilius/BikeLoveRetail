// pages/api/register.ts
import axiosInstance from "@/api/axiosInstance";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const response = await axiosInstance.post("/auth/register", req.body);
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as AxiosError;
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
