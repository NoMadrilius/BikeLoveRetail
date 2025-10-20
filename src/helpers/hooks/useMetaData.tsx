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

  const isSortPage =
    r.asPath.includes("/price-asc") ||
    r.asPath.includes("/price-des") ||
    r.asPath.includes("/sale");

  // 2. убираем локали в начале пути
  const noLang = r.asPath.replace(/^\/(ua|ru)(?=\/|$)/i, "");

  const cleanPath = r.asPath
    .replace(/\/(price-asc|price-des|sale)(\/|$)/gi, "/") // удаляем хвосты сортировок
    .replace(/\/+$/, ""); // убираем лишний слеш в конце

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

      {isSortPage && (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <link rel="canonical" href={cleanPath} />
        </>
      )}
      {!isSortPage && (
        <link rel="canonical" href={r.asPath} />
      )}

      <link rel="alternate" href={noLang} hrefLang="uk-UA" />
      <link rel="alternate" href={"/ru"+noLang} hrefLang="ru-UA" />
      <link rel="alternate" href={"/ru"+noLang} hrefLang="x-default" />

    </Head>
  );
};
