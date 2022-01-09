import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { recuritObj, setPostList } from '../../modules/recruitList';
import { recruitPost } from '../Recruit/Content';
import Post from '../Recruit/Post/Post';
const PostContainer: React.FC = () => {
	const dispatch = useDispatch();
	const { userObj } = useSelector((state: RootState) => state.user);
	const { postList } = useSelector((state: RootState) => state.recruitList);
	React.useEffect(() => {
		axios.get(`/user/${userObj.userIdx}/recruit`).then((res) => {
			res.status === 200 &&
				dispatch(
					setPostList(
						res.data.recruitlist.map((post: recruitPost) => ({
							postObj: { ...post },
							isWriter: post.writer.userIdx === userObj.userIdx,
						}))
					)
				);
		});
	}, []);

	return (
		<Container className="col-container">
			{postList.map((post: recuritObj, idx: number) => (
				<Post idx={idx} isMyPost={true} />
			))}
		</Container>
	);
};
export default PostContainer;
const Container = styled.div`
	gap: 1px;
`;
