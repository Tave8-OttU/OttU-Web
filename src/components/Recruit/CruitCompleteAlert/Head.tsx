import * as React from 'react';
import styled from 'styled-components';
const Head: React.FC = () => {
	return (
		<Container className="row-container">
			<h2>팀원 정보</h2>
		</Container>
	);
};
export default Head;
const Container = styled.div`
	width: 100%;
	h2 {
		margin: 0;
		flex: 1;
		color: #45c7ff;
	}
`;
