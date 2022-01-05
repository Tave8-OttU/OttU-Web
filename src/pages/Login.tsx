import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import kakao from '../assets/images/kakao_login.png';
import logo from '../assets/images/logo_s.png';
import randing from '../assets/images/randing.png';
import Head from '../components/Setting/Head';
import { setLoggedInfo, setSettingInfo } from '../modules/user';
import { kakaoLoginHandler } from '../utils/KakaoLogin';
const Login: React.FC = () => {
	const dispatch = useDispatch();

	const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=http://localhost:3000/&response_type=code`;
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
					<LoginView className="col-container">
						<p>
							카카오 간편 로그인으로
							<br />
							<span>오뜨U</span>를 이용해보세요.
						</p>
						<a href={kauthUrl}>
							<img width="200px" src={kakao} />
						</a>
					</LoginView>
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
const LoginView = styled.div`
	padding: 20%;
	padding-bottom: 10%;
	font-weight: lighter;
	span {
		color: #45c7ff;
		margin-left: 20%;
	}
	p {
		width: 60%;
		line-height: 2;
	}
	align-items: flex-end;
`;
const Body = styled.div``;
const Wrapper = styled.div`
	flex: 0.5;
	margin-top: 50px;
`;
