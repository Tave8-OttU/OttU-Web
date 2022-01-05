import * as React from 'react';
import styled from 'styled-components';
import Gage from './Gage';
interface props {
	reliability: number;
}
const LevelBox: React.FC<props> = ({ reliability }) => {
	return (
		<Container className="col-container">
			<span>오뜨 level</span>
			<Wrapper className="row-container">
				<Gage gage={reliability * 10} />
				<h3>{reliability}</h3>
			</Wrapper>
		</Container>
	);
};
export default LevelBox;
const Container = styled.div`
	background-color: #00000075;
	border: solid thin #45c7ff;
	padding: 10px;
	border-radius: 5px;
	color: white;
	gap: 10px;
	font-size: small;
	font-weight: lighter;
`;
const Wrapper = styled.div`
	gap: 10px;
	h3 {
		margin: 0;
		color: #45c7ff;
	}
`;
