import * as React from 'react';
import styled from 'styled-components';
import Head from '../components/common/Head';
import WriteBtn from '../components/common/WriteBtn';
import MainContainer from '../components/Main/MainContainer';

const Main: React.FC = () => {
	return (
		<Container>
			<Head />
			<Body>
				<MainContainer />
				<WriteBtn isAddOtt={true} />
			</Body>
		</Container>
	);
};
export default Main;

const Container = styled.div`
	background-image: url('bg.png');
	background-position: center bottom;
	background-repeat: no-repeat;
	height: 100vh;
`;
const Body = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
`;
