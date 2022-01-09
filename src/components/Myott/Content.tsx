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
				'오뜨유 해당 ott를 해지하시겠습니까?\n[ 팀의 경우, 해지 시 모든 팀원의 ott도 해지됩니다. ]\n \n해지후, 알림에서 팀원 평가가 이뤄집니다.'
			)
		) {
			axios.delete(`/team/${ottObj.teamIdx}`).then((res) => {
				res.status === 200 && navigate('/');
			});
		}
	};
	return (
		<Container className="col-container">
			<Wrapper>
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
			</Wrapper>
			<Wrapper>
				<Label>요금제</Label>
				<BoxWrapper className="row-container">
					<PriceInfo type={ott ? ott.title : ''} price={ott ? ott.price : 0} />
					<TeamInfo
						people={headcount}
						price={ott ? ott.price / headcount : 0}
					/>
				</BoxWrapper>
			</Wrapper>
		</Container>
	);
};
export default Content;
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
const Wrapper = styled.div`
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
const Container = styled.div`
	position: sticky;
	top: 20px;
	background-color: #1a1a1a;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	padding: 50px;
	gap: 80px;
	box-shadow: 20px 20px 20px 10px #00000025;
`;
