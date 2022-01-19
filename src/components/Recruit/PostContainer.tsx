import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import { getRecruitListHandler } from "../../apis/api/recurit";
import { getRecruitFilterList } from "../../apis/services/recruit";
import { RootState } from "../../modules";
import { recuritObj, setPostList } from "../../modules/recruitList";
import Post from "./Post/Post";
interface props {
	filterValue: number;
}
const PostContainer: React.FC<props> = ({ filterValue }) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const { postList } = useSelector((state: RootState) => state.recruitList);

	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const idx = params.get("idx");

	const dispatch = useDispatch();
	React.useEffect(() => {
		idx &&
			getRecruitListHandler(userObj.userIdx, idx)
				.then((res) => getRecruitFilterList(res, filterValue, userObj.userIdx))
				.then((res) => {
					dispatch(setPostList(res));
				});
	}, [idx, filterValue]);

	return (
		<Container className="col-container">
			{postList?.length === 0 ? (
				<Notice>모집글이 없습니다.</Notice>
			) : (
				postList?.map((post: recuritObj, idx: number) => <Post idx={idx} />)
			)}
		</Container>
	);
};
export default React.memo(PostContainer);
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
