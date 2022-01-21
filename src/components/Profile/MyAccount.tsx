import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withDrawUserHandler } from '../../apis/api/user';
import arrow from '../../assets/images/arrow.png';
import { RootState } from '../../modules';
import { setLoggedInfo } from '../../modules/user';
import { kakaoLogoutHandler } from '../../utils/KakaoLogin';
import { Menu } from './MyOttU';
const MyAccount: React.FC = () => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onClickLogoutHandler = () => {
		kakaoLogoutHandler().then((res: any) => {
			dispatch(setLoggedInfo(null, false));
			navigate('/');
		});
	};
	const onClickWithDraw = () => {
		if (
			window.confirm(
				'정말 오뜨유 서비스 회원을 탈퇴하시겠습니까?\n모든 정보와 팀이 해제됩니다.'
			)
		) {
			withDrawUserHandler(userObj.userIdx).then(() => {
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
