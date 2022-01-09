import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import logo from '../assets/images/logo_s.png';
import randing from '../assets/images/randing.png';
import LoginView from '../components/Login/LoginView';
import Head from '../components/Setting/Head';
import { setLoggedInfo, setSettingInfo } from '../modules/user';
import { kakaoLoginHandler } from '../utils/KakaoLogin';
const Login: React.FC = () => {
	const dispatch = useDispatch();

	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const code = params.get('code');

	React.useEffect(() => {
		if (code) {
			kakaoLoginHandler(code).then((res: any) => {
				loginInfoHandler(res.data.user, res.data.jwt);
			});
		}
	}, []);

	const loginInfoHandler = (user: any, jwt: string) => {
		dispatch(setLoggedInfo(user, true));
		window.localStorage.setItem(
			'token',
			JSON.stringify({
				access_token: jwt,
			})
		);
		user.nickname && dispatch(setSettingInfo(true));
	};

	return (
		<Container>
			<Head />
			<Body className="row-container">
				<Wrapper className="container">
					<img src={randing} width="70%" />
				</Wrapper>
				<Wrapper className="col-container">
					<TextView>
						<h1>OTT 통합 관리 서비스 플랫폼</h1>
						<h2>OttU</h2>
					</TextView>
					<img src={logo} width="30%" />
					<LoginView />
				</Wrapper>
			</Body>
		</Container>
	);
};
export default Login;
const Container = styled.div`
	background-image: url('bg.png');
	background-position: center bottom;
	background-repeat: no-repeat;
	height: 100vh;
`;
const TextView = styled.div`
	h1 {
		font-weight: lighter;
	}
	h2 {
		width: 50%;
		text-align: right;
		color: #45c7ff;
	}
`;
const Body = styled.div``;
const Wrapper = styled.div`
	flex: 0.5;
	margin-top: 50px;
`;
