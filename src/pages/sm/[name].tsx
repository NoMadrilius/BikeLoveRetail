import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/api/axiosInstance";
import { PublicAPI } from "@/api/PublicAPI";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  const name = params?.name as string;
  console.log(name)
  console.log("there")

  let result = await PublicAPI.GetPageData("sm/"+name)
  if(!result.data || !result.data.sitemap) return {notFound: true};

  res.setHeader('Content-Type', 'text/xml');
  res.write(result.data.sitemap);
  res.end();

  return {
    props: {}, // No props needed
  };
};

export default Sitemap;