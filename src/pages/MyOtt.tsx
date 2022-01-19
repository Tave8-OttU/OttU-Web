import * as React from "react";
import styled from "styled-components";
import Head from "../components/common/Head";
import WriteBtn from "../components/common/WriteBtn";
import MainContainer from "../components/Myott/MainContainer";

const MyOtt: React.FC = () => {
	return (
		<Container>
			<Head />
			<Label>나의 OTT</Label>
			<MainContainer />
			<WriteBtn isAddOtt={true} />
		</Container>
	);
};
export default MyOtt;
const Container = styled.div``;
const Label = React.memo(styled.div`
	background-color: #00000020;
	margin: 20px 50px;
	padding: 30px;
	border-radius: 10px;
`);
