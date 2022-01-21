import * as React from 'react';
import styled from 'styled-components';

interface props {
	choiceNum: number;
	headcount: number;
}
const Count: React.FC<props> = ({ choiceNum, headcount }) => {
	return (
		<Container>
			{choiceNum}
			<span>/ {headcount}</span>
		</Container>
	);
};
export default Count;
const Container = styled.div`
	font-size: medium;
	span {
		padding: 0;
		font-size: x-large;
		color: #45c7ff;
		margin-left: 5px;
	}
`;
