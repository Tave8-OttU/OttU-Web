import * as React from 'react';
import styled from 'styled-components';
import Form from '../components/Setting/Form';
import Head from '../components/Setting/Head';
const Setting: React.FC = () => {
	return (
		<Container>
			<Head />
			<Form />
		</Container>
	);
};
export default Setting;

const Container = styled.div`
	background-image: url('bg.png');
	background-position: center bottom;
	background-repeat: no-repeat;
	height: 100vh;
`;
