import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from './MyOttU';
import arrow from '../../assets/images/arrow.png';
const MyAccount: React.FC = () => {
	return (
		<Container>
			<h3>계정</h3>
			<Menu className="col-container">
				<Link to="">
					로그아웃
					<img src={arrow} width="15px" />
				</Link>
				<Link to="">
					회원 탈퇴
					<img src={arrow} width="15px" />
				</Link>
			</Menu>
		</Container>
	);
};
export default MyAccount;
const Container = styled.div``;
