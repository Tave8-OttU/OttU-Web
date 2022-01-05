import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { recruitPost } from './Content';
import Post from './Post/Post';
const PostContainer: React.FC = () => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const [postArr, setPostArr] = React.useState([]);

	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const idx = params.get('idx');

	React.useEffect(() => {
		axios.get(`/recruit/${idx}/list`).then((res) => {
			setPostArr(res.data.recruitlist);
		});
	}, [idx]);

	return (
		<Container className="col-container">
			{postArr.length === 0 ? (
				<Notice>아직 모집글이 없습니다.</Notice>
			) : (
				postArr.map((post: recruitPost) => (
					<Post
						postObj={post}
						isWriter={post.writer.userIdx === userObj.userIdx}
					/>
				))
			)}
		</Container>
	);
};
export default PostContainer;
const Container = styled.div`
	gap: 5px;
	overflow: scroll;
`;
const Notice = styled.div`
	text-align: center;
	padding: 50px 0;
	font-size: large;
	font-weight: lighter;
	color: gray;
	background-color: #ffffff10;
	border-radius: 10px;
`;
