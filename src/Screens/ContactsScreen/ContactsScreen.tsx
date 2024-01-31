import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import BlockWithFrame from "./components/BlockWithFrame";
import { useEffect } from "react";
import axios from "axios";
import axiosInstance from "@/api/axiosInstance";
import { usePublickStore } from "@/store/PublicStore";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";

const ContactsScreen = () => {
	const { t } = useTranslation();
	const road = [{ title: "Котакты", link: "" }];
	const publicStore = usePublickStore();

	useEffect(() => {
		publicStore.getContacts();
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
					margin='0 0 40px 0'
					textTransform='uppercase'>
					{t("contacts")}
				</Text>
				<BlockWithFrame />
				<BlockWithFrame />
				<BlockWithFrame />
				<div style={{ paddingBottom: "100px" }}></div>
			</>
		</>
	);
};
export default observer(ContactsScreen);
