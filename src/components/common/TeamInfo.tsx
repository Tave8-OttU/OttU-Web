import * as React from "react";
import styled from "styled-components";
import { BlueLabel } from "./Labels";
interface props {
	team: string;
	people: number;
	price: number;
}
const TeamInfo: React.FC<props> = ({ team, people, price }) => {
	return (
		<Container className="row-container">
			<Blue>{team + "팀"}</Blue>
			<span>{people}인 팀</span>
			<Blue>{"→"}</Blue>
			<BlueLabel>{price.toLocaleString("ko-kr")}원</BlueLabel>
		</Container>
	);
};
export default TeamInfo;
const Blue = styled.span`
	color: #45c7ff;
	font-weight: bold;
`;
const Container = styled.div`
	justify-content: space-between;
	background-color: white;
	color: black;
	padding: 20px;
	border-radius: 10px;
	width: 250px;
	height: 30px;
	box-shadow: 5px 5px 10px 5px #00000010;
`;
