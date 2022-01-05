import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { GrayBorderBtn, RedBorderBtn } from '../../common/Buttons';
import { recruitPost } from '../Content';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	postObj: recruitPost;
	setIsCompletion: React.Dispatch<React.SetStateAction<boolean>>;
}
const BtnGroup: React.FC<props> = ({ postObj, setIsOpen, setIsCompletion }) => {
	const navigate = useNavigate();
	const onDelClickHandler = () => {
		axios.delete(`/recruit/${postObj.recruitIdx}`).then((res) => {
			res.status === 200 && navigate('/');
		});
	};
	const onCompleteClickHandler = () => {
		axios.get(`/recruit/${postObj.recruitIdx}/members`).then((res) => {
			res.status === 200 && setIsCompletion(true);
		});
	};
	return (
		<Container className="row-container">
			{postObj.choiceNum === postObj.headcount ? (
				<GrayBorderBtn onClick={onCompleteClickHandler}>확정</GrayBorderBtn>
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
