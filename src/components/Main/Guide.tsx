import * as React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/images/arrow.png';
import OttImg from '../common/OttImg';
interface props {
	isMyOtt: boolean;
	ott: string;
}
const Guide: React.FC<props> = ({ isMyOtt, ott }) => {
	return (
		<Container id="target" isBlue={isMyOtt}>
			<OttImg ott={ott} height="20px" isWhite />
			<Wrapper className="row-container">
				{isMyOtt ? '나의 OTT' : '팀원 모집'} 바로가기
				<img src={arrow} width="15px" />
			</Wrapper>
		</Container>
	);
};
export default Guide;
const Container = styled.div<{ isBlue: boolean }>`
	width: 400px;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 10px 10px 0 0;
	background-color: ${(props) => (props.isBlue ? '#45c7ff' : '#000000')};
	position: absolute;
	transform: translate(0, -8vw);
	display: none;
	align-items: center;
`;
const Wrapper = styled.div`
	flex: 1;
	gap: 5px;
	justify-content: flex-end;
	font-weight: lighter;
	font-size: small;
`;
