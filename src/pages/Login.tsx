import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import logo from '../assets/images/randing2.png';
import text from '../assets/images/randingText.png';
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
				loginInfoHandler(res.user, res.jwt);
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
				<LeftWrapper>
					<img src={randing} width="80%" />
				</LeftWrapper>
				<Wrapper className="col-container">
					<TextView>
						<img src={text} width="50%" />
					</TextView>
					<img src={logo} width="50%" />
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
const Body = styled.div`
	gap: 100px;
`;
const Wrapper = styled.div`
	flex: 0.5;
	margin-top: 50px;
`;
const LeftWrapper = styled.div`
	flex: 0.5;
	display: flex;
	justify-content: flex-end;
	align-self: flex-start;
	margin-top: 50px;
`;
