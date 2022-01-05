import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { GrayBorderBtn, RedBorderBtn } from '../../common/Buttons';
import { recruitPost } from '../Content';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	postObj: recruitPost;
}
const BtnGroup: React.FC<props> = ({ setIsOpen, postObj }) => {
	const { userObj } = useSelector((state: RootState) => state.user.userObj);
	const onClickHandler = () => {
		axios.post(`/recruit/participate`, {
			recruitIdx: postObj.recruitIdx,
			userIdx: userObj.userIdx,
		});
	};
	return (
		<Container className="row-container">
			<GrayBorderBtn onClick={onClickHandler}>참여</GrayBorderBtn>
			<RedBorderBtn onClick={() => setIsOpen(false)}>취소</RedBorderBtn>
		</Container>
	);
};
export default BtnGroup;
const Container = styled.div`
	gap: 20px;
	button {
		padding: 10px 25px;
		font-size: small;
		border-radius: 5px;
	}
`;
