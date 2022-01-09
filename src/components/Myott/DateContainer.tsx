import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { ott } from '../../pages/MyOtt';
interface props {
	ottObj: ott;
}
const DateContainer: React.FC<props> = ({ ottObj }) => {
	const navigate = useNavigate();
	const onDelClickHandler = () => {
		if (
			window.confirm(
				'오뜨유 해당 ott를 해지하시겠습니까?\n[ 팀의 경우, 해지 시 모든 팀원의 ott도 해지됩니다. ]\n \n해지후, 알림에서 팀원 평가가 이뤄집니다.'
			)
		) {
			axios.delete(`/team/${ottObj.teamIdx}`).then((res) => {
				res.status === 200 && navigate('/');
			});
		}
	};
	return (
		<Container>
			<Head>
				<Label>결제 일자</Label>
				<DelBtn onClick={onDelClickHandler}>해지</DelBtn>
			</Head>
			<DateWrapper>
				<DateBox>
					매달<Blue>{ottObj.paymentDay}</Blue>일
				</DateBox>
				<DateInfo>
					다음 결제일 <Red>{ottObj.paymentDate}</Red>
				</DateInfo>
			</DateWrapper>
		</Container>
	);
};
export default DateContainer;
const DateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff10;
	width: fit-content;
	padding: 15px;
	border-radius: 10px;
	gap: 20px;
	box-shadow: 10px 10px 20px 10px #00000025;
`;
const DateBox = styled.div`
	font-size: small;
	padding: 10px;
`;
const Container = styled.div`
	gap: 20px;
	display: flex;
	flex-direction: column;
`;
const Head = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const Label = styled.h3`
	margin: 0;
	margin-bottom: 20px;
	border-bottom: solid thin #ffffff80;
	padding-bottom: 20px;
	width: 80%;
`;
const DelBtn = styled.button`
	background-color: #ee6a6150;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: small;
	color: #1a1a1a;
	height: 20px;
	&:hover {
		color: white;
		background-color: #ee6a61;
	}
`;
const DateInfo = styled.span`
	font-size: large;
	font-weight: lighter;
	background-color: #ffffff;
	color: #343434;
	width: fit-content;
	padding: 10px 20px;
	border-radius: 5px;
`;
const Red = styled.span`
	color: #ee6a61;
	border-radius: 5px;
	padding: 5px 10px;
	font-weight: bold;
`;
const Blue = styled.span`
	color: #45c7ff;
	border-radius: 5px;
	padding: 5px 10px;
	font-weight: bold;
`;
const BoxWrapper = styled.div`
	gap: 20px;
`;
