import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { recruitPost } from '../Recruit/Content';
import Post from '../Recruit/Post/Post';
const PostContainer: React.FC = () => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const [postList, setPostList] = React.useState<recruitPost[]>([]);
	React.useEffect(() => {
		axios.get(`/user/${userObj.userIdx}/recruit`).then((res) => {
			res.status === 200 && setPostList(res.data.recruitlist);
		});
	}, []);

	return (
		<Container className="col-container">
			{postList.map((post) => (
				<Post postObj={post} isWriter={true} isMine={true} />
			))}
		</Container>
	);
};
export default PostContainer;
const Container = styled.div`
	gap: 1px;
`;
