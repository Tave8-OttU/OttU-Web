import * as React from 'react';
import styled from 'styled-components';
import Count from '../../common/Count';
import { recruitPost } from '../Content';
interface props {
	postObj: recruitPost;
}
const Head: React.FC<props> = ({ postObj }) => {
	return (
		<Container className="row-container">
			<h2>참여 요청</h2>
			<Count choiceNum={postObj.choiceNum} headcount={postObj.headcount} />
		</Container>
	);
};
export default Head;
const Container = styled.div`
	width: 100%;
	h2 {
		margin: 0;
		flex: 1;
	}
`;
