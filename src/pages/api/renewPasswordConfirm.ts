import axiosInstance from '@/api/axiosInstance';
import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const {phone,code,newPassword} = req.body
            console.log(phone,code,newPassword)
          
          const response = await axiosInstance.post(`/auth/renewpasswordconfirm?phoneNumber=${phone}&code=${code}&newPassword=${newPassword}&Type=BinoCall`);
          res.status(200).json(response.data);
        } catch (error) {
          const err = error as AxiosError;
          res.status(500).json(err);
        }
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
}
