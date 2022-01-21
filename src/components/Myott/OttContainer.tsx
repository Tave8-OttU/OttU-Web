import * as React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import OttImg from "../common/OttImg";
import { ott } from "./MainContainer";
interface props {
	ott?: string;
	ottList: ott[];
}
const OttContainer: React.FC<props> = ({ ott, ottList }) => {
	const navigate = useNavigate();

	const onClickHandler = (event: React.MouseEvent) => {
		const {
			currentTarget: { id },
		} = event;
		navigate(`/myott/${id}`);
	};
	return (
		<Wrapper>
			<OttBox id={ott}>
				<OttImg ott={ott ? ott : ""} width="200px" />
			</OttBox>
			{ottList.map(
				(it) =>
					ott != it.platform.platformName && (
						<OttBox
							id={it.platform.platformName}
							isSmall
							onClick={onClickHandler}
						>
							<OttImg ott={it.platform.platformName} width="150px" />
						</OttBox>
					)
			)}
		</Wrapper>
	);
};
export default OttContainer;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
const OttBox = styled.div<{ isSmall?: boolean }>`
	background-color: white;
	width: 350px;
	height: 185px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 20px 20px 20px 10px #00000025;
	cursor: pointer;
	${(props) =>
		props.isSmall &&
		`
		width: 250px;
		height: 135px;
		opacity:50%;
		transition:0.3s;
		&:hover{
			opacity:100%;
			width: 350px;
			height: 185px;
			img{width:200px}
		}
		`}
`;
