import Head from "next/head";
import { FC } from "react";
import { CONFIG } from "../../../config";
import {useRouter} from "next/router";
type Props = {
  title: string;
  img?: string|undefined;
  description: string;
};
export const UseMetaData: FC<Props> = ({ title, img, description }) => {
    const r = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={img || `${CONFIG.IMG_URL}/mock/NoPhoto.png`}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={img || `${CONFIG.IMG_URL}/mock/NoPhoto.png`}
      />
      <link rel="icon" href="/logo.ico" />
      <link rel="canonical" href={r.asPath} />
    </Head>
  );
};
