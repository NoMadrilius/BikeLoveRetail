import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import BlockWithFrame from "./components/BlockWithFrame";

const ContactsScreen = () => {
	const road = [{ title: "Котакты", link: "" }];
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
