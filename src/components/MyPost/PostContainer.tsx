import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMyRecruitHandler } from "../../apis/api/recurit";
import { getMyRecruitList } from "../../apis/services/recruit";
import { RootState } from "../../modules";
import { recuritObj, setPostList } from "../../modules/recruitList";
import Post from "../Recruit/Post/Post";
const PostContainer: React.FC = () => {
	const dispatch = useDispatch();

	const { userObj } = useSelector((state: RootState) => state.user);
	const { postList } = useSelector((state: RootState) => state.recruitList);
	React.useEffect(() => {
		getMyRecruitHandler(userObj.userIdx)
			.then((res) => getMyRecruitList(res, userObj.userIdx))
			.then((res) => {
				dispatch(setPostList(res));
			});
	}, []);

	return (
		<Container className="col-container">
			{postList?.map((post: recuritObj, idx: number) => (
				<Post idx={idx} isMyPost={true} />
			))}
		</Container>
	);
};
export default PostContainer;
const Container = styled.div`
	gap: 1px;
`;
