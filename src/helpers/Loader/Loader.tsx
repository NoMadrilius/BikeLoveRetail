import { CircularProgress } from "@mui/material";
import { styled } from "styled-components";

const Loader = () => {
	return (
		<>
			<>
				<CircularProgress
					sx={{
						color: "red",
					}}
				/>
			</>
		</>
	);
};
export default Loader;

const Wrapper = styled.div``;
