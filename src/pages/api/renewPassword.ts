import axiosInstance from '@/api/axiosInstance';
import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const {phone} = req.body
            const body = {
                phoneNumber: phone,
                Type: 'BinoCall'
            }
          const response = await axiosInstance.post(`/auth/renewpassword?phoneNumber=${phone}&Type=BinoCall`);
          res.status(200).json(response.data);
        } catch (error) {
          const err = error as AxiosError;
          res.status(500).json(err);
        }
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
}
