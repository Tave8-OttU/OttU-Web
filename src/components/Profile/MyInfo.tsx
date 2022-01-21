import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from './MyOttU';
import arrow from '../../assets/images/arrow.png';
const MyInfo: React.FC = () => {
	return (
		<Container>
			<h3>내 정보</h3>
			<Menu className="col-container">
				<Link to={`/profile/edit/nickname`}>
					닉네임 변경
					<img src={arrow} width="15px" />
				</Link>
				<Link to={`/profile/edit/genre`}>
					관심 장르 변경
					<img src={arrow} width="15px" />
				</Link>
				<Link to={`/profile/edit/kakaotalkId`}>
					카카오 아이디 변경
					<img src={arrow} width="15px" />
				</Link>
			</Menu>
		</Container>
	);
};
export default MyInfo;
const Container = styled.div``;
