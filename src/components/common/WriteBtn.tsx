import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
interface props {
	isAddOtt: boolean;
}
const WriteBtn: React.FC<props> = ({ isAddOtt }) => {
	const navigate = useNavigate();
	const onClickHandler = () => {
		isAddOtt ? navigate('/addott') : navigate('/posting');
	};

	return (
		<Btn className="row-container" onClick={onClickHandler}>
			<FontAwesomeIcon id="icon" icon={faPlus} />
			<Guide>{isAddOtt ? '나의 OTT 추가' : '모집글 작성'}</Guide>
		</Btn>
	);
};
export default WriteBtn;
const Guide = styled.div`
	font-weight: lighter;
	color: white;
	display: none;
	font-size: medium;
`;
const Btn = styled.button`
	position: fixed;
	background-color: #5d5d5d;
	bottom: 50px;
	right: 50px;
	font-size: 25px;
	color: #45c7ff;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	padding: 10px;
	box-shadow: 20px 20px 20px 10px #00000025;
	transition: 0.3s;
	z-index: 1;
	&:hover {
		border-radius: 50px;
		width: 180px;
		gap: 15px;
		justify-content: flex-start;
		#icon {
			background-color: #00000025;
			padding: 15px;
			border-radius: 50px;
			color: white;
		}
		& > div {
			display: block;
		}
	}
`;
