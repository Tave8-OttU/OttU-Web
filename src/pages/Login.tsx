import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo_s.png';
import kakao from '../assets/images/kakao_login.png';
import randing from '../assets/images/randing.png';
const Login: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} />
      </Header>
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
            <Link to="">
              <img width="200px" src={kakao} />
            </Link>
          </LoginView>
        </Wrapper>
      </Body>
    </Container>
  );
};
export default Login;

const Header = styled.header`
  background-color: #00000050;
  img {
    width: 80px;
    padding: 10px 20px;
  }
`;
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
