import * as React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Head from '../components/common/Head';
import WriteBtn from '../components/common/WriteBtn';
import Content from '../components/Recruit/Content';
import OttContainer from '../components/Recruit/OttContainer';
const Recruit: React.FC = () => {
	const { ott } = useParams();
	return (
		<Container>
			<Head />
			<Label>팀원 모집</Label>
			<Body>
				<Content ott={ott} />
				<OttContainer ott={ott} />
			</Body>
			<WriteBtn isAddOtt={false} />
		</Container>
	);
};
export default Recruit;
const Container = styled.div``;
const Body = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0px 50px;
	gap: 50px;
`;
const Label = styled.div`
	background-color: #00000020;
	margin: 30px 50px;
	padding: 30px;
	border-radius: 10px;
`;
