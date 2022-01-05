import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { BlueBtn, GrayBtn } from '../../common/Buttons';
import NickName from '../../common/NickName';
interface props {
	nickname: string;
	isJoin: boolean;
}
const JoinList: React.FC<props> = ({ nickname, isJoin }) => {
	const onClickHandler = () => {
		isJoin
			? axios.patch(`/recruit/waitlist/cancel`)
			: axios.patch(`/recruit/waitlist/accept`).then((res) => {
					res.status === 400 && alert('정원 이하의 참여자만 수락 가능합니다.');
			  });
	};
	return (
		<Container className="row-container">
			<NickName nickname={nickname} />
			{isJoin ? (
				<GrayBtn onClick={onClickHandler}>수락취소</GrayBtn>
			) : (
				<BlueBtn onClick={onClickHandler}>수락</BlueBtn>
			)}
		</Container>
	);
};
export default JoinList;
const Container = styled.div`
	justify-content: space-between;
	border: solid thin #e2e2e2;
	padding: 10px;
	border-radius: 5px;
	font-size: small;
	color: white;
	button:nth-child(1) {
		color: black;
	}
`;
