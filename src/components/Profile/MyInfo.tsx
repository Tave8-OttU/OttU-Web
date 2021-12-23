import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MyInfo: React.FC = () => {
  return (
    <Container>
      <h3>내 정보</h3>
      <Menu className="col-container">
        <Link to="">닉네임 변경 </Link>
        <Link to="">관심 장르 변경 </Link>
        <Link to="">카카오 아이디 변경 </Link>
      </Menu>
    </Container>
  );
};
export default MyInfo;
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
