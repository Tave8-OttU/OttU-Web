import * as React from 'react';
import styled from 'styled-components';
import Head from '../components/common/Head';
import PostContainer from '../components/MyPost/PostContainer';
const MyPost: React.FC = () => {
	return (
		<Container>
			<Head />
			<Body className="col-container">
				<Label>내 모집글</Label>
				<PostContainer />
			</Body>
		</Container>
	);
};
export default MyPost;
const Container = styled.div`
	min-height: 85vh;
`;
const Body = styled.div`
	display: flex;
	padding: 20px;
	gap: 20px;
	background-color: #1a1a1a;
	margin: 30px 25%;
	border-radius: 10px;
	box-shadow: 20px 20px 20px 10px #00000025;
`;
const Label = styled.div`
	background-color: #ffffff20;
	padding: 30px;
	border-radius: 10px;
`;
