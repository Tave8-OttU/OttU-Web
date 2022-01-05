import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../../assets/images/arrow.png';
const MyOttU: React.FC = () => {
	return (
		<Container>
			<h3>나의 OttU</h3>
			<Menu className="col-container">
				<Link to={`/edit/profile/`}>
					내가 작성한 모집글
					<img src={arrow} width="15px" />
				</Link>
				<Link to={'/myott/default'}>
					내가 이용하는 OTT 서비스
					<img src={arrow} width="15px" />
				</Link>
			</Menu>
		</Container>
	);
};
export default MyOttU;
export const Menu = styled.div`
	font-size: small;
	background-color: #00000075;
	border: solid thin #45c7ff;
	padding: 20px;
	border-radius: 5px;
	color: white;
	gap: 20px;
	a {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
	}
	a:hover {
		color: #45c7ff;
	}
`;
const Container = styled.div``;
