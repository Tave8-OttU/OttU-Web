import * as React from 'react';
import styled from 'styled-components';
import Count from '../../common/Count';
import { BlueLabel, DarkGrayLabel, GrayLabel } from '../../common/Labels';
import { recruitPost } from '../Content';

interface props {
	postObj: recruitPost;
}
const RecruitInfo: React.FC<props> = ({ postObj }) => {
	return (
		<Container className="row-container">
			{postObj.isCompleted ? (
				<DarkGrayLabel>모집 완료</DarkGrayLabel>
			) : (
				<BlueLabel>모집 중</BlueLabel>
			)}
			<Count choiceNum={postObj.choiceNum} headcount={postObj.headcount} />
		</Container>
	);
};
export default RecruitInfo;
const Container = styled.div`
	gap: 10px;
`;
