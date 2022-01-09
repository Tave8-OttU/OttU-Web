import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { accept } from '../../../modules/recruitList';
import { BlueBtn, GrayBtn } from '../../common/Buttons';
import NickName from '../../common/NickName';
interface props {
	waitIdx: number;
	userIdx: number;
	isJoin: boolean;
}
const JoinList: React.FC<props> = ({ waitIdx, userIdx, isJoin }) => {
	const [isAccepted, setIsAccepted] = React.useState(isJoin);
	const { currentIdx } = useSelector((state: RootState) => state.recruitList);

	const dispatch = useDispatch();
	const onClickHandler = () => {
		isAccepted
			? axios
					.patch(`/recruit/waitlist/cancel`, { waitlistIdx: waitIdx })
					.then((res) => {
						if (res.status === 200) {
							setIsAccepted(false);
							dispatch(accept(currentIdx, false));
						}
					})
			: axios
					.patch(`/recruit/waitlist/accept`, { waitlistIdx: waitIdx })
					.then((res) => {
						res.status === 400 &&
							alert('정원 이하의 참여자만 수락 가능합니다.');
						if (res.status === 200) {
							setIsAccepted(true);
							dispatch(accept(currentIdx, true));
						}
					});
	};
	return (
		<Container className="row-container">
			<NickName userIdx={userIdx} />
			{isAccepted ? (
				<GrayBtn onClick={onClickHandler}>수락 취소</GrayBtn>
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
	button:nth-child(2) {
		padding: 10px 0;
		text-align: center;
		width: 70px;
		font-size: 12px;
	}
	button:nth-child(1) {
		color: black;
	}
`;
