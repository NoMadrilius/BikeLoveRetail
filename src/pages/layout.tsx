import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await axios.get(
			"https://bikeshop.1gb.ua/api/public/getcategories"
		);
		const data = response.data;
		console.log(response);
		return {
			props: {
				data,
			},
		};
	} catch (error) {
		console.error("Ошибка при получении данных:", error);
		return {
			props: {
				data: [],
			},
		};
	}
};
const Layout = ({ children }: any) => {
	const router = useRouter();
	const currentPath = router.asPath;
	return (
		<>
			<Header opacityBg={currentPath === "/"} />
			{children}
			<Footer />
		</>
	);
};
export default Layout;
