import * as React from "react";
import styled from "styled-components";
import { GrayBorderBtn } from "../../common/Buttons";
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NoticeAlert: React.FC<props> = ({ setIsOpen }) => {
	return (
		<Container>
			모집 확정후, 1주일이 지나 팀 모집이 취소되었습니다.
			<GrayBorderBtn onClick={() => setIsOpen(false)}>확인</GrayBorderBtn>
		</Container>
	);
};
export default NoticeAlert;
const Container = styled.div`
	background-color: white;
	position: fixed;
	color: black;
	width: 300px;
	padding: 20px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 50%;
	left: 50%;
	gap: 30px;
	transform: translate(-50%, -50%);
	z-index: 1;
`;
