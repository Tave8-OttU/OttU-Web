import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { setCurrIdx } from '../../../modules/recruitList';
import DateBox from '../../common/DateBox';
import BtnGroup from '../BtnGroup';

interface props {
	idx: number;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Side: React.FC<props> = ({ idx, setIsOpen }) => {
	const { postList } = useSelector((state: RootState) => state.recruitList);
	const post = postList[idx].postObj;
	const recruitPost = postList[idx];
	const dispatch = useDispatch();

	const onClickJoinHandler = () => {
		dispatch(setCurrIdx(idx));
		setIsOpen(true);
	};
	return (
		<Container className="col-container">
			<DateBox dateString={post.createdDate} />
			{(!post.isCompleted || recruitPost.isWriter) && (
				<BtnGroup
					rid={post.recruitIdx}
					isWriter={recruitPost.isWriter}
					isApplying={recruitPost.isApplying}
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
