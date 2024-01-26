import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import BlockWithFrame from "./components/BlockWithFrame";
import { useEffect } from "react";
import axios from "axios";
import axiosInstance from "@/api/axiosInstance";

const ContactsScreen = () => {
	const road = [{ title: "Котакты", link: "" }];
	const getContacts = async () => {
		let token;
		try {
			if (typeof localStorage !== "undefined") {
				const auth = localStorage.getItem("AuthStore");
				const authToken = JSON.parse(auth!) || "";
				token = authToken.accessToken;
			}

			const response = await axiosInstance.get("/shop/getpublic", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getContacts();
	}, []);
	return (
		<>
			<>
				<UseMetaData title={"Контакты"} img={""} description={""} />
				<BreadCrumbs road={road} />
				<Text
					color={colors.black}
					size='42px'
					fontStyle={fonts.f500}
					margin='0 0 40px 0'>
					КОНТАКТЫ
				</Text>
				<BlockWithFrame />
				<BlockWithFrame />
				<BlockWithFrame />
				<div style={{ paddingBottom: "100px" }}></div>
			</>
		</>
	);
};
export default ContactsScreen;
