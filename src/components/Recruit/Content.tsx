import * as React from 'react';
import styled from 'styled-components';
import { userType } from '../common/NickName';
import OttImg from '../common/OttImg';
import PostContainer from './PostContainer';
interface props {
	ott?: string;
}
const Content: React.FC<props> = ({ ott }) => {
	return (
		<Container className="col-container">
			<Head>
				<OttImg ott={ott ? ott : ''} width="100px" />
			</Head>
			<PostContainer />
		</Container>
	);
};
export default Content;
export interface recruitPost {
	recruitIdx: number;
	platform: {
		platformIdx: number;
		platformName: string;
	};
	writer: userType;
	headcount: number;
	choiceNum: number;
	isCompleted: boolean;
	createdDate: string;
}
const Head = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	height: 40px;
`;
const Container = styled.div`
	background-color: #1a1a1a;
	flex: 0.6;
	border-radius: 10px;
	padding: 20px;
	gap: 30px;
	box-shadow: 20px 20px 20px 10px #00000025;
`;
