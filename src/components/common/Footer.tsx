import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo_s.png';
const Footer: React.FC = () => {
	return (
		<Container>
			<span>2022 &copy; OttU</span>
			<img src={logo} width="80px" />
		</Container>
	);
};
export default Footer;
const Container = styled.footer`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	opacity: 50%;
	padding: 20px 30px;
	padding-top: 10px;
	font-weight: lighter;
	background-color: #000000;
	margin-top: 50px;
`;
