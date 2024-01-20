// pages/api/register.ts
import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    const {adress} = req.query
    const body =  {
      "apiKey":  "72f44b237b90dda96499d22bc3de5765",
      "modelName": "Address",
      "calledMethod": "getCities",
      "methodProperties": {
   "FindByString" :adress,
   "Limit" : "5"
      }
   } 
     
    
    try {
      const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', body);
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as AxiosError;
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
