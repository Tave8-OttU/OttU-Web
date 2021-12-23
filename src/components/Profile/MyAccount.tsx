import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MyAccount: React.FC = () => {
  return (
    <Container>
      <h3>계정</h3>
      <Menu className="col-container">
        <Link to="">로그아웃</Link>
        <Link to="">회원 탈퇴</Link>
      </Menu>
    </Container>
  );
};
export default MyAccount;
const Menu = styled.div`
  font-size: small;
  background-color: #00000075;
  border: solid thin #45c7ff;
  padding: 20px;
  border-radius: 5px;
  color: white;
  gap: 20px;
`;
const Container = styled.div``;
