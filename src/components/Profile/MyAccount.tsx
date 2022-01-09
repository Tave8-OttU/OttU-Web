import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from './MyOttU';
import arrow from '../../assets/images/arrow.png';
import { kakaoLogoutHandler } from '../../utils/KakaoLogin';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInfo } from '../../modules/user';
import axios from 'axios';
import { RootState } from '../../modules';
import { useNavigate } from 'react-router';
const MyAccount: React.FC = () => {
	const dispatch = useDispatch();
	const { userObj } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();
	const onClickLogoutHandler = () => {
		kakaoLogoutHandler().then((res: any) => {
			if (res.status === 200) {
				dispatch(setLoggedInfo(null, false));
				navigate('/');
			}
		});
	};
	const onClickWithDraw = () => {
		if (
			window.confirm(
				'정말 오뜨유 서비스 회원을 탈퇴하시겠습니까?\n모든 정보와 팀이 해제됩니다.'
			)
		) {
			axios.delete(`/user/${userObj.userIdx}`).then(() => {
				onClickLogoutHandler();
			});
		}
	};
	return (
		<Container>
			<h3>계정</h3>
			<Menu className="col-container">
				<Link to="" onClick={onClickLogoutHandler}>
					로그아웃
					<img src={arrow} width="15px" />
				</Link>
				<Link to="" onClick={onClickWithDraw}>
					회원 탈퇴
					<img src={arrow} width="15px" />
				</Link>
			</Menu>
		</Container>
	);
};
export default MyAccount;
const Container = styled.div``;
