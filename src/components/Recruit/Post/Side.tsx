import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { participate } from '../../../modules/recruitList';
import DateBox from '../../common/DateBox';
import BtnGroup from '../BtnGroup';
import { recruitPost } from '../Content';
import { waitList } from '../CruitAlert/ListContainer';

interface props {
	idx: number;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Side: React.FC<props> = ({ idx, setIsOpen }) => {
	const dispatch = useDispatch();
	const { postList } = useSelector((state: RootState) => state.recruitList);
	const post = postList[idx].postObj;
	const recruitPost = postList[idx];
	const { userObj } = useSelector((state: RootState) => state.user);

	React.useEffect(() => {
		axios.get(`/recruit/${post.recruitIdx}/waitlist`).then((res) => {
			res.data.waitlist.findIndex(
				(wait: waitList) => wait.user.userIdx === userObj.userIdx
			) != -1 && dispatch(participate(post.recruitIdx));
		});
	}, []);
	const onClickJoinHandler = () => {
		setIsOpen(true);
	};
	return (
		<Container className="col-container">
			<DateBox dateString={post.createdDate} />
			{!post.isCompleted && (
				<BtnGroup
					isWriter={recruitPost.isWriter}
					isParticipated={recruitPost.isParticipated}
					onClickHandler={onClickJoinHandler}
				/>
			)}
		</Container>
	);
};
export default Side;
const Container = styled.div`
	flex: 1;
	gap: 30px;
	align-items: flex-end;
	height: 100%;
`;
