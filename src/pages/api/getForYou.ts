import axiosInstance from '@/api/axiosInstance';
import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
          const response = await axiosInstance.get('/public/foryou');
          res.status(200).json(response.data);
        } catch (error) {
          const err = error as AxiosError;
          res.status(500).json({ error: err.message });
        }
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
}
