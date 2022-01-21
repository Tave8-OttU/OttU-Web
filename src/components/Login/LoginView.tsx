import * as React from 'react';
import styled from 'styled-components';
import kakao from '../../assets/images/kakao_login.png';
const LoginView: React.FC = () => {
	const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=http://localhost:3000/&response_type=code`;

	return (
		<Container className="col-container">
			<p>
				카카오 간편 로그인으로
				<br />
				<span>오뜨U</span>를 이용해보세요.
			</p>
			<a href={kauthUrl}>
				<img width="200px" src={kakao} />
			</a>
		</Container>
	);
};
export default LoginView;
const Container = styled.div`
	padding-right: 20%;
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
	a {
		cursor: pointer;
	}
	align-items: flex-end;
`;
