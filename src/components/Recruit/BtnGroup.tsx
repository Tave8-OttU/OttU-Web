import * as React from 'react';
import styled from 'styled-components';
import { GrayBGBtn } from '../common/Buttons';
interface props {
	isParticipated: boolean;
	isWriter: boolean;
	onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}
const BtnGroup: React.FC<props> = ({
	isParticipated,
	isWriter,
	onClickHandler,
}) => {
	return (
		<>
			{isWriter ? (
				<GrayBGBtn onClick={onClickHandler}>참여 정보</GrayBGBtn>
			) : isParticipated ? (
				<GrayBGBtn>참여 완료</GrayBGBtn>
			) : (
				<JoinBtn onClick={onClickHandler}>참여 하기</JoinBtn>
			)}
		</>
	);
};
export default BtnGroup;
const JoinBtn = styled.button`
	background-color: #ffa49e80;
	border-radius: 5px;
	padding: 10px 20px;
	&:hover {
		background-color: #ffa49e;
	}
`;
