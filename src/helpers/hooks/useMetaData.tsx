import Head from "next/head";
import { FC } from "react";
type Props = {
  title: string;
  img: string;
  description: string;
};
export const UseMetaData: FC<Props> = ({ title, img, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />{" "}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
