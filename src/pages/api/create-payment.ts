// pages/api/checkout.js
import { CONFIG } from "../../../config";
const crypto = require("crypto");
const private_key = "sandbox_0dWwC9zTPiVKqBeLKLLwD08WZrEeI9Q3RJtY5JXm";
const public_key = "sandbox_i86573020396";

const handler = async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }
  const orderId = "6";
  try {
    const order = {
      public_key: public_key,
      private_key: private_key,
      version: "3",
      action: "pay",
      amount: "20",
      currency: "UAH",
      description: "description",
      result_url: `${CONFIG.IMG_URL}gratitude/${orderId}`,
      server_url: `${CONFIG.IMG_URL}gratitude/${orderId}?Success=ok`,
      order_id: orderId,
      sandbox: "1",
    };
    const base64Encoded = Buffer.from(JSON.stringify(order)).toString("base64");
    const toHash = private_key + base64Encoded + private_key;
    const sha1Hash = crypto.createHash("sha1").update(toHash).digest("binary");
    const base64EncodedSignature = Buffer.from(sha1Hash, "binary").toString(
      "base64"
    );

    const liqpayUrl = `https://www.liqpay.ua/api/3/checkout?data=${base64Encoded}&signature=${base64EncodedSignature}`;

    res.status(200).json(liqpayUrl);
  } catch (error) {
    console.error("Error processing checkout:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
