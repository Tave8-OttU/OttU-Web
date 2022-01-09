import * as React from 'react';
import styled from 'styled-components';
import { ott } from '../../pages/MyOtt';
import DateContainer from './DateContainer';
import PriceContainer from './PriceContainer';
interface props {
	ottObj: ott;
}
const Content: React.FC<props> = ({ ottObj }) => {
	return (
		<Container className="col-container">
			<DateContainer ottObj={ottObj} />
			<PriceContainer ottObj={ottObj} />
		</Container>
	);
};
export default Content;
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
