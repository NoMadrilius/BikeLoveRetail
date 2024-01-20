import axiosInstance from "@/api/axiosInstance";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
        const { request } = req.body;
        const { token } = req.body;
        const {order,products} = request
        
        // Проверяем, что пришли необходимые данные
        if (!order || !products || !token) {
          return res.status(400).json({ error: 'Недостаточно данных в запросе' });
        }

        const body = { order, products };

        const response = await axiosInstance.post('/order/publiccreate', body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        res.status(200).json(response.data);
    } catch (error) {
        const err = error as AxiosError;
        res.status(500).json({ error: err });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
