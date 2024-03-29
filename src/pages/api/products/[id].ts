// pages/api/products/[id].js

import axiosInstance from "@/api/axiosInstance";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const response = await axiosInstance.get(`/public/getproductcardbyid`, {
        params: {
          productId: id,
        },
      });
      const productData = response.data;

      res.status(200).json(productData);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
