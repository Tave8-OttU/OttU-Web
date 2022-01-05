import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Head from '../components/common/Head';
import WriteBtn from '../components/common/WriteBtn';
import Content from '../components/Myott/Content';
import OttContainer from '../components/Myott/OttContainer';
import { RootState } from '../modules';

const MyOtt: React.FC = () => {
	const { ott } = useParams();
	const { userObj } = useSelector((state: RootState) => state.user);

	const [ottList, setOttList] = React.useState<ott[]>([]);
	React.useEffect(() => {
		axios.get(`/user/${userObj.userIdx}/ott`).then((res) => {
			setOttList(res.data.ottlist);
			res.data.ottlist.map(
				(it: ott) => it.platform.platformName === ott && setOttObj(it)
			);
		});
	}, []);

	const [ottObj, setOttObj] = React.useState<ott | null>();
	return (
		<Container>
			<Head />
			<Label>나의 OTT</Label>
			<Body>
				<OttContainer ott={ott} ottList={ottList} />
				{ottObj && <Content ottObj={ottObj} />}
			</Body>
			<WriteBtn isAddOtt={true} />
		</Container>
	);
};
export default MyOtt;
const Container = styled.div``;
const Body = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0px 50px;
	gap: 50px;
`;
const Label = styled.div`
	background-color: #00000020;
	margin: 50px;
	padding: 30px;
	border-radius: 10px;
	color: #45c7ff;
`;

export interface ott {
	teamIdx: number;
	platform: {
		platformIdx: number;
		platformName: string;
	};
	headcount: number;
	paymentDay: number;
	paymentDate: Date;
}
