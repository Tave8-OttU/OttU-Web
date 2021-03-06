import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {
	delRecruitHandler,
	getConfirmMemHandler,
} from '../../../apis/api/recurit';
import { RootState } from '../../../modules';
import { completion } from '../../../modules/recruitList';
import { GrayBorderBtn, RedBorderBtn } from '../../common/Buttons';
import { recruitPost } from '../Content';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	postObj: recruitPost;
	setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
const BtnGroup: React.FC<props> = ({ postObj, setIsOpen, setIsCompleted }) => {
	const { currentIdx } = useSelector((state: RootState) => state.recruitList);
	const isFull = postObj.choiceNum === postObj.headcount;

	const navigate = useNavigate();
	const onDelClickHandler = () => {
		delRecruitHandler(postObj.recruitIdx).then((res) => {
			navigate('/');
		});
	};

	const dispatch = useDispatch();
	const onCompleteClickHandler = () => {
		getConfirmMemHandler(postObj.recruitIdx).then((res) => {
			setIsCompleted(true);
			dispatch(completion(currentIdx));
		});
	};

	return (
		<Container className="row-container">
			{isFull ? (
				<BlueBtn onClick={onCompleteClickHandler}>확정</BlueBtn>
			) : (
				<GrayBorderBtn onClick={() => setIsOpen(false)}>확인</GrayBorderBtn>
			)}
			<RedBorderBtn onClick={onDelClickHandler}>글 삭제</RedBorderBtn>
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
const BlueBtn = styled.button`
	background-color: #45c7ff80;
	border-radius: 5px;
	padding: 10px 20px;
	color: white;
	&:hover {
		background-color: #45c7ff;
	}
`;
