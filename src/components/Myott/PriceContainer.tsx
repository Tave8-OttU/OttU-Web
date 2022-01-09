import * as React from 'react';
import styled from 'styled-components';
import { Prices } from '../../assets/Objects/otts';
import { ott } from '../../pages/MyOtt';
import PriceInfo from '../common/PriceInfo';
import TeamInfo from '../common/TeamInfo';
interface props {
	ottObj: ott;
}
const PriceContainer: React.FC<props> = ({ ottObj }) => {
	const headcount = ottObj.headcount;
	const platform = ottObj.platform.platformIdx - 1;
	const ott = Prices[platform].find((p) => p.headCount === headcount);

	return (
		<Container>
			<Label>요금제</Label>
			<BoxWrapper className="row-container">
				<PriceInfo type={ott ? ott.title : ''} price={ott ? ott.price : 0} />
				<TeamInfo people={headcount} price={ott ? ott.price / headcount : 0} />
			</BoxWrapper>
		</Container>
	);
};
export default PriceContainer;
const Container = styled.div`
	gap: 20px;
	display: flex;
	flex-direction: column;
`;
const Label = styled.h3`
	margin: 0;
	margin-bottom: 20px;
	border-bottom: solid thin #ffffff80;
	padding-bottom: 20px;
	width: 80%;
`;
const BoxWrapper = styled.div`
	gap: 20px;
`;
