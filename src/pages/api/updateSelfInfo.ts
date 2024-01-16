// /api/updateSelfInfo.ts
import axios, { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
    
      console.log(req.body)
      const body = 
        {
            "email": "Ssssss",
            "firstName": "Ssssss",
            "lastName": "Sssssss",
            "patronymic": "Ssssss",
            "bike": "BikeBike",
            "gender": "male",
            "birth": "2024-01-16T14:55:17.119Z",
            "language": "en"
          }
      const response = await axios.put(`https://bikeshop.1gb.ua/api/user/selfupdate`,body, {
        headers: {
          Authorization: `Bearer d0458c09-ef32-43df-92b0-8b1dd2229525`, // это мой id (для теста)
        },
      });
      res.status(200).json(response.data);
      console.log('success')
    } catch (error) {
      const err = error as AxiosError;
      res.status(500).json({ error: err.message });
      console.log({ error: err.message })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
