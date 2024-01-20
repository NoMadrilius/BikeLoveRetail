import Head from "next/head";
import { FC } from "react";
import { CONFIG } from "../../../config";
type Props = {
	title: string;
	img: string;
	description: string;
};
export const UseMetaData: FC<Props> = ({ title, img, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta
				property='og:image'
				content={img || `${CONFIG.IMG_URL}/mock/NoPhoto.png`}
			/>
			<meta property='og:type' content='website' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta
				name='twitter:image'
				content={img || `${CONFIG.IMG_URL}/mock/NoPhoto.png`}
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};
