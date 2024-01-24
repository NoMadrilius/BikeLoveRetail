import GratitudeScreen from "@/Screens/GratitudeScreen/GratitudeScreen";
import { useRouter } from "next/router";

const Gratitude = () => {
	const router = useRouter();
	console.log(router.query.id);
	return (
		<>
			<GratitudeScreen id={router.query.id as string} />
		</>
	);
};
export default Gratitude;
