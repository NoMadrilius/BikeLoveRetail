// /api/updateSelfInfo.ts
import axiosInstance from '@/api/axiosInstance';
import axios, { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
   const {token} = req.body
   const {requestBody} = req.body
    
      const response = await axiosInstance.put(`/user/selfupdate`,requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as AxiosError;
      res.status(500).json({ error: err.message });
      console.log({ error: err.message })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
