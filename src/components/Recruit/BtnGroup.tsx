import * as React from 'react';
import styled from 'styled-components';
import { getWaitListHandler } from '../../apis/api/recurit';
import { GrayBGBtn } from '../common/Buttons';
import { DarkGrayLabel } from '../common/Labels';
interface props {
	isApplying: boolean;
	isWriter: boolean;
	onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
	rid: number;
}
const BtnGroup: React.FC<props> = ({
	isApplying,
	isWriter,
	onClickHandler,
	rid,
}) => {
	const [isTeam, setIsTeem] = React.useState(false);
	React.useEffect(() => {
		isWriter &&
			getWaitListHandler(rid).then((res) => {
				setIsTeem(res.isTeam);
			});
	}, [rid]);

	return (
		<>
			{isWriter && !isTeam && (
				<GrayBGBtn onClick={onClickHandler}>참여 정보</GrayBGBtn>
			)}
			{!isWriter &&
				(isApplying ? (
					<DarkGrayLabel>참여 완료</DarkGrayLabel>
				) : (
					<JoinBtn onClick={onClickHandler}>참여 하기</JoinBtn>
				))}
		</>
	);
};
export default BtnGroup;
const JoinBtn = styled.button`
	background-color: #ffffff;
	color: #00000080;
	border-radius: 5px;
	padding: 10px 20px;
	&:hover {
		background-color: #ffffff90;
	}
`;
