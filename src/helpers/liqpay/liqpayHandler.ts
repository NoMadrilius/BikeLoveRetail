// pages/api/checkout.js
import axios from 'axios';
const crypto = require('crypto');
const private_key = 'sandbox_0dWwC9zTPiVKqBeLKLLwD08WZrEeI9Q3RJtY5JXm'

const handler = async (req:any, res:any) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const order = {
      amount: 12,
      currency: 'USD',
      description: 'Оплата заказа',
      // Добавьте другие необходимые данные заказа
    };
    const base64Encoded = Buffer.from(JSON.stringify(order)).toString('base64');
    // Конкатенуємо private_key + data + private_key
const toHash = private_key + base64Encoded + private_key;

// Використовуємо SHA-1 для створення хешу
const sha1Hash = crypto.createHash('sha1').update(toHash).digest('binary');

// Кодуємо отриманий хеш в base64
const base64EncodedSignature = Buffer.from(sha1Hash, 'binary').toString('base64');


    // Сформируйте URL для Liqpay API с использованием данных заказа
    const liqpayUrl = `https://www.liqpay.ua/api/3/checkout?data=${base64Encoded}&signature=${base64EncodedSignature}`;

    // Перенаправьте пользователя на страницу оплаты Liqpay
    return res.redirect(liqpayUrl);
  } catch (error) {
    console.error('Error processing checkout:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
