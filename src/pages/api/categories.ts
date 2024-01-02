// pages/api/categories.js

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://bikeshop.1gb.ua/api/public/getcategories'); 
      const categories = response.data;

      res.status(200).json(categories);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { categoryId, storageId, page, pageSize, filtersVariantIds, sortingSettings } = req.body;
      const requestData = {
        categoryId,
        storageId,
        page,
        pageSize,
        filtersVariantIds,
        sortingSettings
      };

      const response = await axios.post('https://bikeshop.1gb.ua/api/public/catalogproducts', requestData); 
      const products = response.data.products;

      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
