import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Prices } from '../../assets/Objects/otts';
import { ott } from '../../pages/MyOtt';
import PriceInfo from '../common/PriceInfo';
import TeamInfo from '../common/TeamInfo';
interface props {
	ottObj: ott;
}
const Content: React.FC<props> = ({ ottObj }) => {
	const navigate = useNavigate();

	const headcount = ottObj.headcount;
	const platform = ottObj.platform.platformIdx - 1;
	const ott = Prices[platform].find((p) => p.headCount === headcount);

	const onDelClickHandler = () => {
		if (
			window.confirm(
				'오뜨유 해당 ott를 해지하시겠습니까?\n(팀의 경우, 해지 시 모든 팀원의 ott도 해지됩니다.\n 해지후, 팀원 평가가 이뤄집니다.)'
			)
		) {
			axios.delete(`/team/${ottObj.teamIdx}`).then((res) => {
				res.status === 200 && navigate('/');
			});
		}
	};
	return (
		<Container className="col-container">
			<Head>
				<span>결제 일자</span>
				<DelBtn onClick={onDelClickHandler}>해지</DelBtn>
			</Head>
			<DateInfo>
				다음 결제일 <Blue>{ottObj.paymentDate}일</Blue>
			</DateInfo>
			<DateInfo>
				매달 <Blue>{ottObj.paymentDay}일</Blue>
			</DateInfo>
			<span>요금제</span>
			<BoxWrapper className="row-container">
				<PriceInfo type={ott ? ott.title : ''} price={ott ? ott.price : 0} />
				<TeamInfo people={headcount} price={ott ? ott.price : 0} />
			</BoxWrapper>
		</Container>
	);
};
export default Content;
const Head = styled.div`
	display: flex;
	flex-direction: row;
	span {
		flex: 1;
	}
`;
const DelBtn = styled.button`
	color: #ee6a61;
	border: solid thin #ee6a61;
	padding: 10px 20px;
	border-radius: 10px;
	font-size: small;
`;
const DateInfo = styled.span`
	font-size: large;
	margin-bottom: 20px;
`;
const Blue = styled.span`
	color: #45c7ff;
	font-weight: bold;
`;
const BoxWrapper = styled.div`
	gap: 20px;
`;
const Container = styled.div`
	position: sticky;
	top: 20px;
	background-color: #1a1a1a;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	padding: 50px;
	gap: 30px;
	box-shadow: 20px 20px 20px 10px #00000025;
`;
