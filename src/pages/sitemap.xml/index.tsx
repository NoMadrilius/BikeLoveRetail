import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/api/axiosInstance";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  let r = await axiosInstance.get<string>('https://api.bikelove.com.ua/api/public/sitemap')

  res.setHeader('Content-Type', 'text/xml');
  res.write(r.data);
  res.end();

  return {
    props: {}, // No props needed
  };
};

export default Sitemap;